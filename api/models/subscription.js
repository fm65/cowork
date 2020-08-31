'use strict';
module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
        name: DataTypes.STRING,
        firstHourPrice: DataTypes.FLOAT,
        nextHalfHourPrice: DataTypes.FLOAT,
        fiveHoursPrice: DataTypes.FLOAT,
        monthPrice: DataTypes.FLOAT,
        eightMonthPrice: DataTypes.FLOAT,
        yearPrice: DataTypes.FLOAT
    }, {});
    Subscription.associate = function(models) {
        Subscription.hasOne(models.User);
    };
    return Subscription;
};
