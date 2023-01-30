
const router = require('express').Router();
const auth = require('../utils/auth');
const axios = require('axios')

router.get('/profile', auth, async (req, res) => {
    try {
        axios.get('/api/campaigns').then(campaigns => {
            axios.get('/api/characters').then(characters => {

                res.render('profile', { 
                    characters, 
                    campaigns,
                    user: {
                        name: req.session.user_name,
                        email: req.session.user_email,
                    }
                })
            })
        })
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});


module.exports = router;