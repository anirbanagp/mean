var common = require("../common");
var express = require("./express");
var mongooseService = require("./mongoose");

/**
 * connect mongo before start express app
 * @param {*} callback
 */
module.exports.init = function init(callback) {
  mongooseService.connect(function (db) {
    var app = express.init(db);
    if (callback) callback(app, db);
  });
};

/**
 * try to connect mongo and initialize express app
 */
module.exports.start = function start(callback) {
  var _this = this;

  _this.init(function (app, db) {
    const port = common.config.server.port;

    // Start the app by listening on <port> at <host>
    app.listen(port, common.config.server.host, function () {
      console.log("--------");
      console.log(common.chalk.green(common.config.app.name));
      console.log();
      console.log(common.chalk.green("Server:          " + common.config.server.host));
      console.log(common.chalk.green("Port:            " + common.config.server.port));
      console.log(common.chalk.green("Database:        " + common.config.db.url));
      console.log("--------");
      if (callback) callback(app, db);
    });
  });
};
