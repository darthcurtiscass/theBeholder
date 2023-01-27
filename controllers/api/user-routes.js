//Routes to create path for user data to be retrieved, updated, created and deleted.
const router = require('express').Router();
const User = require('../../models/User');
const auth = require('../../utils/auth')

router.get('/', auth, async (req, res) => {
    try {
        const userData = await User.findAll()
        const users = userData.map((user) => user.get({ plain : true}))
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
})

//create new User
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        res.json(newUser)
    } catch(err) {
        res.status(500).json({message:'an error occurred, please try again.', err})
    }
})

router.put('/:id', auth, async (req, res) => {
    try {
        const updateUser = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json(updateUser)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
})

router.delete('/:id', async (req, res) => {
    const deleteUser = await User.destroy({ where: {id: req.params.id}})
      return res.json(deleteUser)
  });   

module.exports = router;