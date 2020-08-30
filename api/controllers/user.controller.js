const models   = require('../models');
const User = models.User;
const SecurityUtils = require('../utils').securityUtils

module.exports = {

    allUsers: () => {
        return User.findAll();
    }

}
