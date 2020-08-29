'use strict';
module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
    }, {});
    Room.associate = function(models) {
        Room.belongsTo(models.Building);
        Room.hasOne(models.Reservation);
    };
    return Room;
};
