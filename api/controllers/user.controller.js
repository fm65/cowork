const models   = require('../models');
const User = models.User;
const SecurityUtils = require('../utils').securityUtils

module.exports = {

    allUsers: async () => {
        return User.findAll();
    },

    getUserWithEmail: async (email) => {
        return await User.findOne({
            where: {
                email
            }
        });
    },

    getUserWithId: async (id) => {
        return await User.findOne({
            where: {
                id
            }
        });
    }

}
