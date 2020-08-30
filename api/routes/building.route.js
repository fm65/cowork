const authMiddleware = require('../middlewares').authMiddleware;
const buildingController = require('../controllers').buildingController;

module.exports = function(app) {

    app.get("/api/buildings", async (req, res) => {
        const buildings = await buildingController.allBuildings();
        res.status(200).json(buildings);
    });

    app.get('/api/building', async (req, res) => {
        if (req.body.name) {
            try {
                const building = await buildingController.getABuilding(req.body.name);
                if (building) {
                    res.status(201).json(building);
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

    app.get('/api/buildings/id', async (req, res) => {
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
