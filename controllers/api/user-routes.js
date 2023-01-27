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
}

)

module.exports = router;