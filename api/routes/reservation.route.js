const authMiddleware = require('../middlewares').authMiddleware;
const ReservationController = require('../controllers').reservationController;

module.exports = function(app) {

    // Make a reservation of a room of a building for a user
    app.post('/api/reservations', async (req, res) => {
        if (req.body.startDate && req.body.endDate && req.body.participants && req.body.totalPrice
            && req.body.userEmail && req.body.roomName && req.body.buildingName) {
            try {
                const reservation = await ReservationController.addReservation(
                    req.body.startDate, req.body.endDate, req.body.participants, req.body.totalPrice,
                    req.body.userEmail, req.body.roomName, req.body.buildingName);
                res.status(201).json(reservation);
            }
            catch (err) {
                res.status(409).json(err.toString());
                //res.status(409).json({status: "error", message: "reservation already taken"});  // Error conflict
            }
        } else {
            res.status(400).end();
        }
    });

    // Get all reservations
    app.get("/api/reservations", async (req, res) => {
        const reservations = await ReservationController.allReservations();
        res.status(200).json(reservations);
    });

    // Get all reservations of a room
    app.get('/api/rooms/reservations', async (req, res) => {
        if (req.body.roomId) {
            try {
                const reservations = await ReservationController.getReservationsByRoom(req.body.roomId);
                if (reservations) {
                    res.status(201).json(reservations);
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

    // Get all reservations of a user
    app.get('/api/users/reservations', async (req, res) => {
        if (req.body.userId) {
            try {
                const reservations = await ReservationController.getReservationsByUser(req.body.userId);
                if (reservations) {
                    res.status(201).json(reservations);
                } else {
                    res.status(401).end();  // Unautorized
                }
            }
            catch (err) {
                res.status(500).json(err.toString());      // Server crashed
            }
        } else {
            res.status(400).end();
        }
    });

    // Get a reservation by its ID
    app.get('/api/reservations/:id', async (req, res) => {
        if (req.params) {
            try {
                const reservations = await ReservationController.getReservationById(req.params.id);
                if (reservations) {
                    res.status(201).json(reservations);
                } else {
                    res.status(401).end();  // Unautorized
                }
            }
            catch (err) {
                res.status(500).json(err.toString());      // Server crashed
            }
        } else {
            res.status(400).end();
        }
    });


}
