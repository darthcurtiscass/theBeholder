const router = require('express').Router();
const Campaign = require('../../models/Campaign');
const auth = require('../../utils/auth')

    router.get('/', auth, async (req, res) => {
        try {
            const campaignData = await Campaign.findAll()
            const campaigns = campaignData.map((campaign) => campaign.get({ plain : true}))
            res.status(200).json(campaigns)
        } catch (err) {
            res.status(500).json({message:'an error occurred, please try again.'})
        }
    }

    )
module.exports = router;