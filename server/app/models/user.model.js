var mongoose = require("./../../common").mongoose;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var common = require("./../../common");


function hashPassword(password) {
  return bcrypt.hashSync(password, common.config.saltRounds);
}
var UserModelSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: hashPassword
  }
});

// Compile model from schema
module.exports = mongoose.model("User", UserModelSchema);
