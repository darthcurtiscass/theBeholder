
const router = require('express').Router();
const auth = require('../utils/auth');
const { Character, Campaign, User } = require('../models');
//get all characters belonging to a specific user
router.get('/:user_id', async (req, res) => {
    try {
        const userCharacters = await Character.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(userCharacters)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});
//get all campaigns belongin to a specific user
router.get('/campaign/:user_id', auth, async (req, res) => {
    try {
        const userCampaigns = await Campaign.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(userCampaigns)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/user/:user_id', auth, async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return 
    }
    res.render('/login');
})

module.exports = router;