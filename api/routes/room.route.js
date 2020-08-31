const bodyParser = require('body-parser');
const RoomController = require('../controllers').RoomController;

module.exports = function(app) {

    // Add new room
    app.post('/api/rooms', bodyParser.json(), async (req, res) => {
        if (req.body.content) {
            
            try {
                const room = await RoomController.addNewRoom(req.body.name, req.body.type, req.body.buildingId);
                res.status(201).json(room);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    // Get all rooms by building ID
    app.get('/api/rooms', async (req, res) => {
        const rooms = await RoomController.allRoomsByBuildingId(req.body.content);
        res.status(200).json(rooms);
    });

    // Get a specific room from a building
    app.get('/api/rooms', async (req, res) => {
        if (req.body.name && req.body.buildingId) {
            try {
                const room = await RoomController.getARoomFromABuilding(req.body.name, req.body.buildingId);
                if (room) {
                    res.status(201).json(room);
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
