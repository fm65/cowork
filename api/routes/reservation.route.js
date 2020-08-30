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

    app.get('/api/reservation', async (req, res) => {
        if (req.body.name) {
            try {
                const id = await buildingController.getBuildingId(req.body.name);
                console.log(id);
                if (id) {
                    res.status(201).json(id);
                } else {
                    res.status(401).end();  // Unautorized
                }
            }
            catch (err) {
                res.status(500).json(err.toString());      // Server crashed
            }
        } else {
            res.status(400).end();          //
        }
    });


}
