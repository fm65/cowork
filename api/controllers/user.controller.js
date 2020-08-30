const models   = require('../models');
const User = models.User;
const SecurityUtils = require('../utils').securityUtils

module.exports = {

    allUsers: async () => {
        return User.findAll();
    },

    getAUser: async (id) => {
        return await User.findOne({
            where: {
                id
            }
        });
    }

}
