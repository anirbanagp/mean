const common = require("../common");

var users = require("../app/controllers/users.controller");

common.router.get("/users", users.index.bind(users));
common.router.post("/users/save", users.store.bind(users));

module.exports = common.router;
