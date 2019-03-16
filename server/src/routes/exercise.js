var common = require("../common");

var router = common.router;

router.get("/exercise", function(req, res) {
  console.log("exercise get");
  res.send("hello");
});
router.get("/exercise/:id", function(req, res) {
  console.log("exercise get", req.params.id);
});

module.exports = common.router;
