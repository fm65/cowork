const models   = require('../models');
const Subscription = models.Subscription;

module.exports = {

    allSubcriptions: () => {
        return Subscription.findAll();
    },

    getASubscription: async (id) => {
        return await Subscription.findOne({
            where: {
                id
            }
        });
    }

}
