const models   = require('../models');
const User = models.User;
const Session = models.Session;
const Building = models.Building;
const BuildingController = require('./building.controller');
const SubscriptionController = require('./subscription.controller');
const SecurityUtils = require('../utils').securityUtils;

module.exports = {

    signup: async (email, password, firstName, lastName, buildingId, subscriptionId) => {
        const user = await User.findOne({
            attributes: ['email'],
            where: {email: email}
        });
        const building = await BuildingController.getABuildingById(buildingId);
        const subscription = await SubscriptionController.getASubscription(subscriptionId);
        var subscriptionDate = null;
        if (subscriptionId == 2 || subscriptionId == 3) {subscriptionDate = Date.now(); }
        if (!user) {
            const newUser = await User.create({
                email: email,
                password: SecurityUtils.hashPassword(password),
                firstName: firstName,
                lastName: lastName,
                isAdmin: false,
                registrationDate: Date.now(),
                subscriptionDate
            });
            newUser.setBuilding(building);
            newUser.setSubscription(subscription);
            return newUser;
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
