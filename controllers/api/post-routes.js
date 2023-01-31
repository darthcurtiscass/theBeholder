const router = require('express').Router();
const Post = require('../../models/Post');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll()
        const posts = postData.map((post) => post.get({ plain : true}))
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const onePost = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(onePost)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const newPost = await Post.create({
            content: req.body.content,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
        
        res.status(200).json(newPost);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({message:'an error occurred, please try again.', err})
        }
    });

    router.put('/:id', async (req, res) => {
        try {
            const updatePost = await Post.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json(updatePost)
        } catch (err) {
            res.status(500).json({message:'an error occurred, please try again.'})
        }
    })

    router.delete('/:id', async (req, res) => {
        const deletePost = await Post.destroy({ where: {id: req.params.id}})
          return res.json(deletePost)
      });   

module.exports = router;