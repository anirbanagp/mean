const common = require("../common");
const middleware = require('./../app/middleware/index')
const auth = require("../app/controllers/auth.controller");

common.router.post("/login", auth.login.bind(auth));
common.router.get("/home", auth.index.bind(auth));

module.exports = common.router;
