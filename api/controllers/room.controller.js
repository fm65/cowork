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
    
}
module.exports = RoomController;