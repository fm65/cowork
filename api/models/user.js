'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
        registrationDate: DataTypes.DATE,
        subscriptionDate: DataTypes.DATE
    }, {});
    User.associate = function(models) {
        User.belongsTo(models.Subscription);
        User.belongsTo(models.Building);
        User.hasOne(models.Reservation);
    };
    return User;
};
