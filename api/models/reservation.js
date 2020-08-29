'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        participants: DataTypes.INTEGER,
        totalPrice: DataTypes.FLOAT
    }, {});
    Reservation.associate = function(models) {
        Reservation.belongsTo(models.User);
        Reservation.belongsTo(models.Room);
        Reservation.belongsToMany(models.Equipment, {through: models.ReservationEquipment});
    };
    return Reservation;
};
