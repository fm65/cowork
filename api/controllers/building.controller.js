const models   = require('../models');
const Building = models.Building;


class BuildingController {

    static async allBuildings() {
        return Building.findAll();
    }

    static async getABuildingById(id) {
        return await Building.findOne({
            where: {
                id
            }
        });
    }

    static async getABuilding(name) {
        return await Building.findOne({
            where: {
                name
            }
        });
    }

    static async getBuildingId(name){
        const building = await this.getABuilding(name);
        return building.id;
    }

}
module.exports = BuildingController;
