const models   = require('../models');
const Room = models.Room;
const SecurityUtils = require('../utils').securityUtils

class RoomController{

    static addNewRoom(name,type,buildingId) {
        
        return Room.create({
            name,
            type,
            buildingId
        });
    }

    static async allRoomsByBuildingId(buildingId) {
        return Room.findAll({
            where: {
                BuildingId : buildingId
            }
        });
    }

    static async getARoomFromABuilding(name, buildingId) {
        return Room.findOne({
            where: {
                BuildingId : buildingId,
                name: name
            }
        });
    }

    
}
module.exports = RoomController;
