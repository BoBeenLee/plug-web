const Routes = require("next-routes");

const routers = new Routes()
  .add({
    name: "hello",
    pattern: "/hello"
  })
  .add({
    name: "about",
    pattern: "/about"
  })
  .add({
    name: "serviceManual",
    pattern: "/service/manual"
  });

module.exports = routers;
