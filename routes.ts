import Routes from "next-routes";

const routers = new Routes().add({
  name: "Hello",
  page: "hello",
  pattern: "/hello"
});
export default routers;
