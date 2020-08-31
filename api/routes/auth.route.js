const userController = require('../controllers').userController;
const authController = require('../controllers').authController;
const authMiddleware = require('../middlewares').authMiddleware;
//const authJwt = require('../middlewares').authJwtMiddleware;

module.exports = function(app) {

    app.post("/api/auth/signup", async (req, res) => {
        if (req.body.email && req.body.password && req.body.firstName && req.body.lastName
            && req.body.buildingName && req.body.subscriptionId) {
            try {
                const user = await authController.signup(req.body.email, req.body.password, req.body.firstName, req.body.lastName,
                    req.body.buildingName, req.body.subscriptionId);
                res.status(201).json(user);
            }
            catch (err) {
                res.status(409).json({status: "error", message: "user already exist"}).end();  // Error conflict
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/auth/signin', async (req, res) => {
        if (req.body.email && req.body.password) {
            try {
                const session = await authController.signin(req.body.email, req.body.password);

                if (session) {
                    res.status(201).json(session);
                } else {
                    res.status(401).end();  // Unautorized
                }
            }
            catch (err) {
                res.status(500).end();      // Server crashed
            }
        } else {
            res.status(400).end();          //
        }
    });


}
