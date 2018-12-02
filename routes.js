const Routes = require("next-routes");

const routers = new Routes()
  .add({
    name: "about",
    pattern: "/about"
  })
  .add({
    name: "serviceManual",
    pattern: "/service/manual"
  });

module.exports = routers;
