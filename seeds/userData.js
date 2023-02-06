const { User } = require('../models');

const userData = [
  {
    name: 'tommy',
    email: 'tommysemail@gmail.com',
    password: 'tommyspassword'
  },
  {
    name: 'michelle',
    email: 'girlboss1934@yahoo.com',
    password: 'jfahjHKGkasjKHjk1325'
  },
  {
    name: 'rowan',
    email: 'nawor@aol.com',
    password: 'password123'
  }
    
  ];
  
  const seedUser = () => User.bulkCreate(userData);
  
  module.exports = seedUser;
  