const Post = require('../models/Post.js');

const postData = [

  ];
  
  const seedPost = () => Post.bulkCreate(postData);
  
  module.exports = seedPost;
  