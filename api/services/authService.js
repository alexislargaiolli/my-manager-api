'use strict';

module.exports = {

    authenticate(username, password) {
        return User.findOne({ email: username })
            .then((user) => {
                if (!user) return Promise.reject("Not found");

                return User.comparePassword(password, user.password)
                    .then(() => {
                        const token = authService.generateToken(user);
                        return Promise.resolve({ userId: user.id, role: user.role, token: token })
                    });
            });
    },

    generateToken(user) {
        return jwToken.issue({ userId: user.id, role: user.role });
    }

};