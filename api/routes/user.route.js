const userController = require('../controllers').userController;
const authMiddleware = require('../middlewares').authMiddleware;
//const authJwt = require('../middlewares').authJwtMiddleware;

module.exports = function(app) {

    app.get("/api/users", (req, res) => {
        userController.allUsers();
        res.status(204).end();

    });

}
