const models   = require('../models');
const User = models.User;
const Session = models.Session;
const SecurityUtils = require('../utils').securityUtils

const Op = models.Sequelize.Op;

module.exports = {

    signup: async (email, password, firstName, lastName) => {
        const user = await User.findOne({
            attributes: ['email'],
            where: {email: email}
        });
        if (!user) {
            return User.create({
                email: email,
                password: SecurityUtils.hashPassword(password),
                firstName: firstName,
                lastName: lastName,
                isAdmin: false,
                registrationDate: Date.now()
            });
        }
    },

    signin: async (email, password) => {
        const user = await User.findOne({
            where: {
                email
            }
        });
        console.log(user);
        if (!user) {
            return null;
        }

        var passwordIsValid = (SecurityUtils.hashPassword(password) == user.password);

        if (!passwordIsValid) {
            return null;
        }

        var token = await SecurityUtils.randomToken();

        const session = await Session.create({
            token
        });
        session.setUser(user);
        return session;
    },

    userFromToken: (token) => {
        return User.findOne({
            include: [{
                model: Session,
                where: {
                    token
                }
            }]
        });
    }
}
