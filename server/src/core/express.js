const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
};

/**
 * Initialize angular application
 */
module.exports.initAngular = function (app) {
  app.use(express.static(path.join(global.appRoot, "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(global.appRoot, "dist/index.html"));
  });
};

/**
 * Initialize route files
 */
module.exports.initRoutes = function (app) {
  var routesArray = [];
  var routerPath = global.appRoot + "/routes/";

  fs.readdirSync(routerPath).forEach(file => {
    const filePath = path.join(routerPath, file);
    let requireFilePath = path.resolve(filePath);
    routesArray.push(require(requireFilePath));
  });

  app.use("/api", routesArray);
};

/**
 * Initialize the Express application
 */
module.exports.init = function (db) {
  var app = express();

  this.initMiddleware(app);

  this.initRoutes(app);

  return app;
};
