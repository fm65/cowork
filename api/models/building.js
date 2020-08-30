'use strict';
module.exports = (sequelize, DataTypes) => {
    const Building = sequelize.define('Building', {
        name: {type: DataTypes.STRING, unique: true},
        scheduleMonThu: DataTypes.STRING,
        scheduleFri: DataTypes.STRING,
        scheduleWeekend: DataTypes.STRING,
    }, {});
    Building.associate = function(models) {
        Building.hasOne(models.User);
        Building.hasOne(models.Room);
        Building.hasOne(models.Equipment);
    };
    return Building;
};
