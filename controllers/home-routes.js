const router = require('express').Router();
const auth = require('../utils/auth');
const axios = require('axios')

router.get('/homepage', auth, async (req, res) => {
    try {
        axios.get('/api/posts').then(posts => {
            res.render('homepage', { posts })
        })
        
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.get('/login', (req, res)=> {
    res.send("You aren't logged in")
})


module.exports = router;