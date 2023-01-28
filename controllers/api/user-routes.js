//Routes to create path for user data to be retrieved, updated, created and deleted.
const router = require('express').Router();
const {User} = require('../../models');
const auth = require('../../utils/auth');
const sequelize = require('sequelize');



router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll()
        const users = userData.map((user) => user.get({ plain : true}))
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const oneUser = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(oneUser)
    } catch (err) {
        res.status(500).json({message:'an error occurred, please try again.'})
    }
});

//create new User
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
          req.session.save(() => {
            req.session.loggedIn = true;
         
          res.status(200).json(newUser);
            });
        } catch (err) {
            console.log(err);
            console.log(newUserData);
            res.status(500).json({message:'an error occurred, please try again.', err})
        }
      });

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