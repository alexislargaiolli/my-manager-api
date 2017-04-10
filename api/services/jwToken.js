'use strict';

const jwt = require('jsonwebtoken'),
    tokenSecret = "secretissecret";

module.exports = {

    /**
     * Search a token in a given request
     */
    findToken(req) {
        let token;
        if (req.headers && (req.headers.token || req.headers['x-access-token'])) {
            token = req.headers.token || req.headers['x-access-token'];
            if (token.length <= 0) return null;

        } else if (req.param('token')) {
            token = req.param('token');
            // We delete the token from param to not mess with blueprints
            delete req.query.token;
        } else {
            return null;
        }
        return token;
    },

    // Generates a token from supplied payload
    issue(payload) {
        return jwt.sign(
            payload,
            tokenSecret, // Token Secret that we sign it with
            {
                expiresIn: "30 days" // Token Expire time
            });
    },

    // Verifies token on a request
    verify(token, callback) {
        return jwt.verify(
            token, // The token to be verified
            tokenSecret, // Same token we used to sign
            {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
            callback //Pass errors or decoded token to callback
        );
    }
};