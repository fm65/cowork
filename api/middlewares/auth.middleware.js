const AuthController = require('../controllers').authController;

class AuthMiddleware {
    static auth() {
        return async (req, res, next) => {
            const autorization = req.header['autorization'];
            if (!autorization || !autorization.startsWith('Bearer ')) {
                res.status(401).end();  // Unautorized
                return;
            }
            const token = autorization.slice(7);
            const user = await AuthController.userFromToken(token);
            if (!user) {
                res.status(401).end();  // Unautorized
                return;
            }
            req.user = user;
            next();
        };
    }
}
module.exports = AuthMiddleware;
