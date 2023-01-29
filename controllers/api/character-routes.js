const router = require('express').Router();
const { Character } = require('../../models');
const auth = require('../../utils/auth')
//retrieve all characters
router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll()
        const characters = characterData.map((character) => character.get({ plain : true}))
        res.status(200).json(characters)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userCharacters = await Character.findAll({
            where: {
                user_id: req.params.user_id
            }
        });
        res.status(200).json(userCharacters);
    } catch(err) {

    }
})

router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findByPk(req.params.id)
        
        res.status(200).json(character)
    } catch (err) {
        res.status(500).json({message:err})
    }
});

router.post('/', async (req, res) => {
    try {
        const newCharacter = await Character.create(req.body)
        console.log(newCharacter);
        res.status(200).json(newCharacter);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:err});
    }
});

module.exports = router;