const Routes = require("next-routes");

const routers = new Routes().add({
  name: "Hello",
  page: "hello",
  pattern: "/hello"
});

module.exports = routers;
