const User = require('./User');
const Character = require('./Character');

User.hasMany(Character, {
  foreignKey: 'id',
});

Character.belongsTo(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

module.exports = { User, Character };