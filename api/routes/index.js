module.exports = function() {
    require('./auth.route')(...arguments),
    require('./user.route')(...arguments),
    require('./building.route')(...arguments),
    require('./room.route')(...arguments),
    require('./subscription.route')(...arguments),
    require('./reservation.route')(...arguments)

};
