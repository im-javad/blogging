const jsonServer = require("json-server");
const db = require("./db.json");
const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post("/posts", (req, res, next) => {
  req.body = {
    ...req.body,
  };

  next();
});

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
