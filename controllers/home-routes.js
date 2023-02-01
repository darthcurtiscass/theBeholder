const router = require('express').Router();
const Post = require('../models/Post');

router.get('/homepage', async (req, res) => {
    try {
        const postData = await Post.findAll()
        const post = postData.map((newPosts) => newPosts.get({ plain: true }))
        res.status(200).json(post)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

module.exports = router;