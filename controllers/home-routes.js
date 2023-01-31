const router = require('express').Router();
const auth = require('../utils/auth');
const axios = require('axios');
const Post = require('../models/Post');

router.get('/homepage', async (req, res) => {
    try {
        const postData = await Post.findAll()
        const post = postData.map((newPosts) => newPosts.get({ plain: true }))
        res.status(200).json(post)
        
        // axios.get('/api/posts').then(posts => {
        //     res.render('homepage', { posts })
        // })
        
    } catch (err) {
        console.log(err)
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.get('/login', (req, res)=> {
    res.send("You aren't logged in")
})

router.get('/profile/:id', async (req, res) => {
    try {
        axios.get('/api/user/:id').then(user => {
            res.render('profile', { user })
        })
        
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
})

router.get('/login', (req, res) => {
    res.render('login');
  });


module.exports = router;