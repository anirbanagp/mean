const UserModel = require("../models/user.model");
const BaseController = require("./../shared/classes/base.class");
// const bcrypt = require('bcrypt');
// var common = require("./../../common");

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
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    userInfo.save(function (err, User) {
      if (err) {
        this.http = 422;
        this.error = true;
        this.data = err;
        this.message = err.message;
      } else {
        this.data = User;
      }
      res.status(this.http).json(this.apiResponse);
    }.bind(this));
  }
}

module.exports = new User();
