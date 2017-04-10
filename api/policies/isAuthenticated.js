'use strict';

module.exports = (req, res, next) => {
    let token = jwToken.findToken(req);
    if (token == null) {
        return res.status(401).send();
    }

    jwToken.verify(token, function(err, token) {
        if (err) return res.status(401).send();
        req.token = token; // This is the decrypted token or the payload you provided
        req.userId = token.userId;
        req.role = token.role;
        next();
    });
};