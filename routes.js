const Routes = require("next-routes");

const routers = new Routes()
  .add({
    name: "manual/teacher",
    pattern: "/manual/teacher"
  })
  .add({
    name: "manual/parent",
    pattern: "/manual/parent"
  })
  .add({
    name: "guide",
    pattern: "/guide"
  });

module.exports = routers;
