module.exports = function() {
    require('./auth.route')(...arguments),
    require('./user.route')(...arguments),
    require('./building.route')(...arguments)
    //require('./room.route')(...arguments)
};
