const express = require("express");
exports.express = express;
exports.router = express.Router();
exports.mongoose = require("mongoose");
exports.chalk = require("chalk");
exports.config = require("./config/env");
