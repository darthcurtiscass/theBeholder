
const router = require('express').Router();
const auth = require('../utils/auth');
const axios = require('axios')

router.get('/profile', auth, async (req, res) => {
    try {
        axios.get('/api/campaigns').then(campaigns => {
            res.render('profile', { campaigns })
        })
        axios.get('/api/characters').then(characters => {
            res.render('profile', { characters })
        })
        
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
})

module.exports = router;