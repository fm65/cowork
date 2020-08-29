'use strict';
module.exports = (sequelize, DataTypes) => {
    const Equipment = sequelize.define('Equipment', {
        name: DataTypes.STRING,
        isAvailable: DataTypes.BOOLEAN,
        quantity: DataTypes.INTEGER,
    }, {});
    Equipment.associate = function(models) {
        Equipment.belongsTo(models.Building);
        Equipment.belongsToMany(models.Reservation, {through: models.ReservationEquipment});
    };
    return Equipment;
};
