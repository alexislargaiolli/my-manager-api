/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
'use strict';

module.exports = {
    create(req, res) {
        const data = req.body;

        User.create({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
            .meta({ fetch: true })
            .then((user) => {
                res.send({ token: authService.generateToken(user) }); // payload is { id: user.id}
            })
            .catch((err) => {
                sails.log.error(err);
                return res.serverError("Something went wrong");
            });
    },

    authenticated(req, res) {
        let token = jwToken.findToken(req);

        if (token == null) {
            return res.send(false);
        }

        jwToken.verify(token, function(err, token) {
            if (err) return res.send(false);
            req.token = token; // This is the decrypted token or the payload you provided
            res.send(token);
        });
    },

    authenticate(req, res) {
        const data = req.body;
        const email = data.email;
        const password = data.password;

        if (!data.email || !data.password) return res.badRequest('Email and password required');
        authService.authenticate(email, password).then(info => {
                res.send(info);
            })
            .catch(err => {
                return res.forbidden();
            });
    },

    register(req, res) {
        const data = req.body;
        if (data.password !== data.confirmPassword) return res.badRequest("Password not the same");
        User.create({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
            .meta({ fetch: true })
            .then((user) => {
                res.send({ token: authService.generateToken(user) }); // payload is { id: user.id}
            })
            .catch((err) => {
                sails.log.error(err);
                return res.serverError("Something went wrong");
            });
    }
};