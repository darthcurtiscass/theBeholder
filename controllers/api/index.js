const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const characterRoutes = require('./character-routes');
const campaignRoutes = require('./campaign-routes');
const loginRoutes = require('./login-routes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/campaigns', campaignRoutes);
router.use('/login', loginRoutes);

module.exports = router;