const { User } = require('../models');

const userData = [
  {
    name: 'dylan',
    email: 'dylan@du.edu',
    password: 'pass12345'
  },
  {
    name: 'owen',
    email: 'owen@du.edu',
    password: 'pass12345'
  },
  {
    name: 'teamir',
    email: 'teamir@du.edu',
    password: 'pass12345'
  },
  {
    name: 'max',
    email: 'max@du.edu',
    password: 'pass12345'
  }
  ];
  
  const seedUser = () => User.bulkCreate(userData);
  
  module.exports = seedUser;
  