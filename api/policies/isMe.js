'use strict';

module.exports = (req, res, next) => {
    if (req.userId != req.body.user) {
        return res.forbidden();
    }
    next();
};