let jwt = require('jsonwebtoken');
const config = require('./../../config/env');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: true,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;

                next();
            }
        });
    } else {
        return res.status(401).json({
            error: true,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    checkToken: checkToken
}