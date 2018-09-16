const LRUCache = require("lru-cache");
const { send, sendError } = require("micro");
const next = require("next");
const routers = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const baseDir = "src";
const app = next({ dev, dir: baseDir });
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});
const getCacheKey = req => {
  return `${req.url}`;
};

const main = routers.getRequestHandler(
  app,
  async ({ req, res, route, query }) => {
    const cacheKey = getCacheKey(req);

    if (ssrCache.has(cacheKey)) {
      return send(res, 200, ssrCache.get(cacheKey));
    }

    try {
      const html = await app.renderToHTML(req, res, route.page, query);
      ssrCache.set(cacheKey, html);
      return send(res, 200, html);
    } catch (err) {
      return sendError(req, res, err);
    }
  }
);

const setup = async handler => {
  await app.prepare();
  return handler;
};

module.exports = setup(main);
