'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
        registrationDate: DataTypes.DATE,
        subscriptionDate: DataTypes.DATE
    }, {});
    User.associate = function(models) {
        User.belongsTo(models.Subscription);
        User.belongsTo(models.Building);
        User.hasOne(models.Reservation);
        User.hasOne(models.Session);
    };
    return User;
};
