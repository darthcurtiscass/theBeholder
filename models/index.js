const User = require('./User');
const Character = require('./Character');
const Campaign = require("./Campaign");
const Post = require("./Post");

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Campaign, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Campaign.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});



module.exports = { User, Character, Campaign };