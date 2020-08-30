const userController = require('../controllers').userController;
const authMiddleware = require('../middlewares').authMiddleware;
//const authJwt = require('../middlewares').authJwtMiddleware;

module.exports = function(app) {

    app.get("/api/users", async (req, res) => {
        const users = await userController.allUsers();
        res.status(200).json(users);
    });

    app.get('/api/users/:id', async (req, res) => {
        if (req.params) {
            try {
                const user = await userController.getAUser(req.params.id);
                if (user) {
                    res.status(201).json(user);
                } else {
                    res.status(401).end();  // Unautorized
                }
            }
            catch (err) {
                res.status(500).end();      // Server crashed
            }
        } else {
            res.status(400).end();
        }
    });

}
