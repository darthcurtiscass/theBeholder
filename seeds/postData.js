const Post = require('../models/Post.js');

const postData = [
  {
    content: 'Hey guys I have a question about uhhhhhhhh something'
  },
  {
    content: 'I have a new campaign idea, anyone wanna come join me?? Add my discord'
  },
  {
    content: 'Is Carl a fitting name for a high-elf???'
  }

  ];
  
  const seedPost = () => Post.bulkCreate(postData);
  
  module.exports = seedPost;
  