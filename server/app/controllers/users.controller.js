var UserModel = require("../models/user.model");
var BaseController = require("./../shared/classes/base.class");

class User extends BaseController {

  index(req, res) {
    this.check();

    UserModel.find(function (err, result) {
      this.data = result;
      this.error = true;
      res.send(this.apiResponse);
    }.bind(this));
    // res.json({ error: false, data: [{ name: "anirban", age: 25 }] });
  }
  store(req, res) {
    var userInfo = new UserModel({
      email: "anirban3@gmail.com",
      name: "Anirban3 Saha"
    });
    userInfo.save(function (err, User) {
      if (err) res.send(err);
      res.send(User);
    });
  }
}

module.exports = new User();
