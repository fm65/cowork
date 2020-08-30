const models   = require('../models');
const Reservation = models.Reservation;
const RoomController = require('./room.controller');
const BuildingController = require('./building.controller');
const UserController = require('./user.controller');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {

    addReservation: async (startDate, endDate, participants, totalPrice, userEmail, roomName, buildingName) => {
        const buildingId = await BuildingController.getBuildingId(buildingName);
        const room = await RoomController.getARoomFromABuilding(roomName, buildingId);
        const user = await UserController.getUserWithEmail(userEmail);
        const reservation = await Reservation.create({
            startDate,
            endDate,
            participants,
            totalPrice
        });
        reservation.setRoom(room);
        reservation.setUser(user);
        return reservation;
    },

    allReservations: () => {
        return Reservation.findAll();
    },

    getReservationsByRoom: async (roomId) => {
        return await Reservation.findAll({
            where: {
                RoomId: roomId
            }
        });
    }
    /*
    getAvailableRooms: async (dateDebut, dateEnd) => {
        return await Reservation.findAll({
            where: {
                [Op.or]: [
                    {
                        [Op.and]: [
                            {
                                startDate: {
                                    [Op.lt]: dateDebut
                                }
                            },
                            {
                                endDate: {
                                    [Op.lt]: dateDebut
                                }
                            }
                        ]
                    },{
                        [Op.and]: [
                            {
                                startDate: {
                                    [Op.gt]: dateEnd
                                }
                            },
                            {
                                endDate: {
                                    [Op.gt]: dateEnd
                                }
                            }
                        ]
                    }
                ]

            }
        });
    }

     */



}
