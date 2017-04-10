'use strict';

module.exports = (req, res, next) => {
    if (req.role != 'admin') {
        return res.forbidden();
    }
    next();
};