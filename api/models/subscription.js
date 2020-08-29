'use strict';
module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
        name: DataTypes.STRING,
        firstHourPrice: DataTypes.INTEGER,
        nextHalfHourPrice: DataTypes.INTEGER,
        fiveHoursPrice: DataTypes.INTEGER,
        monthPrice: DataTypes.INTEGER,
        eightMonthPrice: DataTypes.INTEGER,
        yearPrice: DataTypes.INTEGER
    }, {});
    Subscription.associate = function(models) {
        Subscription.hasOne(models.User);
    };
    return Subscription;
};
