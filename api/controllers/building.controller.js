const models   = require('../models');
const Building = models.Building;
const SecurityUtils = require('../utils').securityUtils

module.exports = {

    allBuildings: () => {
        return Building.findAll();
    },

    getABuilding: async (name) => {
        return await Building.findOne({
            where: {
                name
            }
        });
    }

}
