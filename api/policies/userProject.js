'use strict';

module.exports = (req, res, next) => {
    req.params['user'] = req.userId;
    next();
};