const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User')

router.get('/homepage', async (req, res) => {
    try {
        const postData = await User.findAll({
            include: [
                {
                    model: Post,
                    attributes: [
                        'content',
                    ]
                }
            ]
        })
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', ...posts );

    } catch (err) {
        console.log(err)
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

module.exports = router;