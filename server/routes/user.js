const common = require("../common");

var users = require("../app/controllers/users.controller");

common.router.get("/users", users.index.bind(users));
common.router.get("/users/save", users.store);

module.exports = common.router;
