
const router = require('express').Router();
const auth = require('../utils/auth');
const { Character, Campaign, User } = require('../models');

router.get('/user', auth, async (req, res) => {
    try {
        const profileData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Campaign,
                    attributes: [
                        'id',
                        'name',
                        'quest',
                        'party_size',
                    ],
                },
                {
                    model: Character,
                    attributes: [
                        'id',
                        'name',
                        'race',
                        'character_class',
                        'subclass',
                        'level',
                        'alignment',
                        'hitpoints',
                        'experience_points',
                        'speed',
                        'strength',
                        'dexterity',
                        'constitution',
                        'intelligence',
                        'wisdom',
                        'charisma',
                        'spells',
                        'cantrips',
                        'proficiencies',
                        'personality',
                        'ideals',
                        'bonds',
                        'flaws',
                    ],
                },
            ],
        });
        const myProfile = profileData.get({ plain: true });
        console.log('=====================================')
        console.log(req.session);
        console.log('=====================================')
        res.render('profile', { ...myProfile, loggedIn: req.session.loggedIn });

    } catch (err) {
        console.log(err)
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});
//get all characters belonging to a specific user
router.get('/characters/:user_id', async (req, res) => {
    try {
        const userCharacters = await Character.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(userCharacters)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});
//get all campaigns belongin to a specific user
router.get('/campaign/:user_id', auth, async (req, res) => {
    try {
        const userCampaigns = await Campaign.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(userCampaigns)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/user/:user_id', auth, async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
});

router.get('/character/:id', async (req, res) => {
    try {
        const character = await Character.findByPk(req.params.id)
        
        const myCharacter = character.get({ plain: true });
        res.render('characters', {...myCharacter, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json({message:err})
    }
});

router.get('/campaign/:id', async (req, res) => {
    try {
        const oneCampaign = await Campaign.findByPk(req.params.id)

        const myCampaign = oneCampaign.get({ plain: true });
        res.render('campaigns', {...myCampaign, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return 
    }
    res.render('/login');
})

module.exports = router;