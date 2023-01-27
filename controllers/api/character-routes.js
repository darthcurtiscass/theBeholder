const router = require('express').Router();
const Character = require('../../models/Character');
const auth = require('../../utils/auth')

    router.get('/', auth, async (req, res) => {
        try {
            const characterData = await Character.findAll()
            const characters = characterData.map((character) => character.get({ plain : true}))
            res.status(200).json(characters)
        } catch (err) {
            res.status(500).json({message:'an error occurred, please try again.'})
        }
    }

    )
module.exports = router;