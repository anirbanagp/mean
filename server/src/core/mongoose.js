var common = require("../common");

/**
 * change mongo promise to global promise and connect mongo server
 *
 * @param {*} callback once connected we will call the callback function
 */
module.exports.connect = function(callback) {
  common.mongoose.Promise = common.config.db.promise;
  common.mongoose
    .connect(
      common.config.db.url,
      common.config.db.options
    )
    .then(function(connection) {
      common.mongoose.set("debug", common.config.db.debug);
      if (callback) callback(connection.db);
    })
    .catch(function(err) {
      console.error(common.chalk.red("Could not connect to MongoDB!"));
      console.log(err);
    });
};
