'use strict';
module.exports = (sequelize, DataTypes) => {
    const ReservationEquipment = sequelize.define('ReservationEquipment', {
        quantityReserved: DataTypes.INTEGER
    }, {});
    return ReservationEquipment;
};

