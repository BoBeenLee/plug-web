const Routes = require("next-routes");

const routers = new Routes().add({
  name: "Hello",
  page: "hello",
  pattern: "/hello"
},
{
  name: "About",
  page: "About",
  pattern: "/about"
});

module.exports = routers;
