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

    router.get('/:id', async (req, res) => {
        try {
            const oneCampaign = await Campaign.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(oneCampaign)
        } catch (err) {
            res.status(500).json({message:'an error occurred, please try again.'})
        }
    });

    router.post('/', async (req, res) => {
        try {
            const newCampaign = await Campaign.create({
                name: req.body.name,
                quest: req.body.quest,
            });
            req.session.save(() => {
                req.session.loggedIn = true;
            
            res.status(200).json(newCampaign);
                });
            } catch (err) {
                console.log(err);
                res.status(500).json({message:'an error occurred, please try again.', err})
            }
        });

        router.put('/:id', async (req, res) => {
            try {
                const updateCampaign = await User.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                res.json(updateCampaign)
            } catch (err) {
                res.status(500).json({message:'an error occurred, please try again.'})
            }
        })

        router.delete('/:id', async (req, res) => {
            const deleteCampaign = await Campaign.destroy({ where: {id: req.params.id}})
              return res.json(deleteCampaign)
          });   

module.exports = router;