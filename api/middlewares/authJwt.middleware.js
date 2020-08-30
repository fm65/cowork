const jwt = require('jsonwebtoken');
const models = require('../models');
const User = models.User;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({
            status: "error",
            message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

// A REVOIR
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            return res.status(403).json({
                status: "error",
                message: "Require Admin Role!"
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};
module.exports = authJwt;
