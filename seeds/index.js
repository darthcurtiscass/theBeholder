const sequelize = require('../config/connection');
const seedCampaign = require('./campaignData');
const seedCharacter = require('./characterData');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCampaign();

  await seedCharacter();

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();
