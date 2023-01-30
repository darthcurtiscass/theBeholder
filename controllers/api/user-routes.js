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
            req.session.user_id = newUser.id;
            req.session.user_name = newUser.name;
            req.session.user_email = newUser.email;
         
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
});

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
        req.session.user_name = userData.name;
        req.session.user_email = userData.email;

        res
          .status(200)
          .json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
    const deleteUser = await User.destroy({ where: {id: req.params.id}})
      return res.json(deleteUser)
  });   

module.exports = router;