var mongoose = require("./../../common").mongoose;

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  name: String,
  password: String
});

// Compile model from schema
module.exports = mongoose.model("User", UserModelSchema);
