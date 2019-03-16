const UserModel = require("../models/user.model");
const BaseController = require("./../shared/classes/base.class");
const jwt = require('jsonwebtoken');
const config = require('./../../config/env');


class Authentication extends BaseController {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let httpStatus = 200;
        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({ username: username },
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                this.data = { token };
                this.message = 'Authentication successful!';
                httpStatus = 200;
            } else {
                httpStatus = 403;
                this.error = true;
                this.message = 'Incorrect username or password';
            }
        } else {
            httpStatus = 400;
            this.error = true;
            this.message = 'Authentication failed! Please check the request';
        }
        res.status(httpStatus).json(this.apiResponse);
    }
    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}

module.exports = new Authentication();
