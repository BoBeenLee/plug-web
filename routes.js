const Routes = require("next-routes");

const routers = new Routes()
  .add({
    name: "about",
    pattern: "/about"
  })
  .add({
    name: "manual",
    pattern: "/manual"
  });

module.exports = routers;
