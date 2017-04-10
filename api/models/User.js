'use strict';
const bcrypt = require('bcrypt');

/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

    attributes: {
        firstname: 'string',
        lastname: 'string',
        email: {
            type: 'string',
            required: true,
            isEmail: true
        },
        role: {
            type: 'string',
            defaultsTo: 'user',
            isIn: ['admin', 'user']
        },
        password: 'string',
        projects: {
            collection: 'project',
            via: 'user'
        }
    },

    // Here we encrypt password before creating a User
    beforeCreate(values, next) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                sails.log.error(err);
                return next();
            }

            bcrypt.hash(values.password, salt, (err, hash) => {
                if (err) {
                    sails.log.error(err);
                    return next();
                }
                values.password = hash; // Here is our encrypted password
                return next();
            });
        });
    },

    comparePassword(password, encryptedPassword) {

        return new Promise(function(resolve, reject) {
            bcrypt.compare(password, encryptedPassword, (err, match) => {
                if (err) {
                    sails.log.error(err);
                    return reject("Something went wrong!");
                }
                if (match) return resolve();
                else return reject("Mismatch passwords");
            });
        });
    }
};