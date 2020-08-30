const authMiddleware = require('../middlewares').authMiddleware;
const SubscriptionController = require('../controllers').subscriptionController;

module.exports = function(app) {

    app.get("/api/subscriptions", async (req, res) => {
        const subs = await SubscriptionController.allSubcriptions();
        res.status(200).json(subs);
    });

    app.get('/api/subscriptions/:id', async (req, res) => {
        if (req.params) {
            try {
                const sub = await SubscriptionController.getASubscription(req.params.id);
                if (sub) {
                    res.status(201).json(sub);
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
