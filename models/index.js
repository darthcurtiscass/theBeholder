const User = require('./User');
const Character = require('./Character');
const Campaign = require("./Campaign");
const Post = require("./Post");

User.hasMany(Character, {
  foreignKey: 'user_id',
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Campaign, {
  foreignKey: 'user_id',
});

Campaign.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});



module.exports = { User, Character, Campaign };