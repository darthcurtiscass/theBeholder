const { Campaign } = require('../models');

const campaigndata = [
  {
    name: 'Curse of Strahd',
    quest: 'Prince King Arthur and Merlin arrived in Barovia and we surprised to find a vampire had overtaken the region and had been ruling with an iron tooth for the last century. After hearing of the tragedies beign perpetrated by Strahd and his cronies, it became obvious to Merlin that Strahd must be irradicated. However, Prince King Arthur had other plans. Arthur planned to join Strahd and use Strahd as a stepping stone to eternal power over the region and beyond.',
    party_size: '3'
  },
  {
    name: 'Mines of Phandelver',
    quest: "Our young heroes stumble upon a mysterious fog that surrounds and obscures their vision. Strange halluconations occur as they're transported to the land of Phandelver, where treachery and danger awaits!",
    party_size: '4'
  },
  {
    name: 'The Noble Rot',
    quest: "An evil presence is lurking in the fine mansion of the local Burgomaster. The mansion is located in the middle of a grape field. The grapes are used for the local winery and have a poisonous surprise if tasted directly from the cursed vines. The mansion threatens all who enter.",
    party_size: "5"
  },
];

const seedCampaign = () => Campaign.bulkCreate(campaigndata);

module.exports = seedCampaign;
