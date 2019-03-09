const common = require("../common");
const jwtAuth = require('./../app/middleware/jwt-auth.middleware')
const auth = require("../app/controllers/auth.controller");

common.router.post("/login", auth.login.bind(auth));
common.router.get("/home", jwtAuth.checkToken, auth.index.bind(auth));

module.exports = common.router;
