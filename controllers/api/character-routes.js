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
//retrieve all characters belonging to a single user
router.get('/user/:user_id', auth, async (req, res) => {
    try {
        const userCharacters = await Character.findAll({
            where: {
                user_id: req.params.user_id
            }
        });
        res.status(200).json(userCharacters);
    } catch(err) {

    }
});
//retrieve a single character by their id.
router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findByPk(req.params.id)
        
        const myCharacter = character.get({ plain: true });
        // res.render('characters', {myCharacter})
    } catch (err) {
        res.status(500).json({message:err})
    }
});
//create a new character
router.post('/', auth, async (req, res) => {
    try {
        const newCharacter = await Character.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        console.log(newCharacter);
        res.status(200).json(newCharacter);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:err});
    }
});
//delete a character by their id
router.delete('/:id', auth, async (req, res) => {
    try {
        const deletedCharacter = await Character.destroy({ where: {id: req.params.id}})
        return res.json(deletedCharacter)
    } catch(err) {
        res.status(500).json({message:err});
    }
});

module.exports = router;