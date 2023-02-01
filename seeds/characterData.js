const { Character } = require('../models');

const characterData = [
    {
        name: 'James Finger',
        race: 'Goblin',
        class: 'Mage',
        level: 2,
        alignment: 'Giant Faction',
        hitpoints: 4,
        experience_points: 10,
        initiative: 1,
        attack_modifier: -7,
        speed: 1,
        strength: 1,
        dexterity: 1,
        constitution: 4,
        intelligence: 10,
        wisdom: 8,
        charisma: 1,
        spells: 'Candle-size Fireball',
        cantrips: 'booger-flick',
        proficiencies: 'Spelling',
        personality: 'Strange',
        ideals: 'Not repeatable',
        bonds: 'None at all',
        flaws: 'Ugly',
        features: 'Warts',
        traits: null,
    },
    {
        name: 'jackson "harpoon" McSlap',
        race: 'Human',
        class: 'Ranged',
        level: 10,
        alignment: 'Sailor Folk',
        hitpoints: 30,
        experience_points: 30,
        initiative: 10,
        attack_modifier: 7,
        speed: 10,
        strength: 11,
        dexterity: 8,
        constitution: 9,
        intelligence: 2,
        wisdom: 1,
        charisma: 10,
        spells: null,
        cantrips: 'throw',
        proficiencies: 'Harpoon Throwing',
        personality: 'Serious',
        ideals: 'Everyone should live on boats',
        bonds: 'Sea',
        flaws: 'Gives bad advice',
        features: 'Big bushy beard',
        traits: null,
    },
    {
        name: 'Carl',
        race: 'High-Elf',
        class: 'Thief',
        level: 8,
        alignment: 'Theives-Guild',
        hitpoints: 25,
        experience_points: 14,
        initiative: 20,
        attack_modifier: 3,
        speed: 16,
        strength: 12,
        dexterity: 11,
        constitution: 14,
        intelligence: 10,
        wisdom: 8,
        charisma: 20,
        spells: null,
        cantrips: "Put in pocket",
        proficiencies: 'Slight of hand', 
        personality: 'Strange',
        ideals: 'The earth is flat',
        bonds: 'Lost them due to theft',
        flaws: 'Tells inappropriate jokes at inappropriate times',
        features: null,
        traits: null,
    },
     {
            name: 'Dopin Saxiros',
            race: 'Dragonborn',
            class: 'Fighter',
            level: 5,
            alignment: 'Lawful-Neutral',
            hitpoints: 54,
            experience_points: 6500,
            speed: 30,
            strength: 17,
            dexterity: 18,
            constitution: 18,
            intelligence: 8,
            wisdom: 7,
            charisma: 14,
            spells: 'Breath Weapon (Gold)',
            cantrips: 'Action Surge',
            proficiencies: 'Heavy Armor, Light Armor, Medium Armor, Shields, Martial Weapons, Simple Weapons.',
            personality: 'I have a crude sense of humor, I enjoy being strong and breaking things, and I can stare down a hell hound without flinching.',
            ideals: 'Responsibility. I do what I must and obey a just authority. Liv and let live. Ideals aren"t worth killing over or going to war for.',
            bonds: 'Those who fight beside me are those worth dying for.',
            flaws: 'I have little respect for anyone who is not a proven warrior.',
            },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;

// {
//     name: 'notNull/string',
//     race: 'notNull/string',
//     class: 'notNull/string',
//     level: 'notNull/interger',
//     alignment: 'notNull/string',
//     hitpoints: 'notNull/interger',
//     experience_points: 'notNull/interger',
//     initiative: 'notNull/interger',
//     attack_modifier: 'notNull/interger',
//     speed: 'notNull/interger',
//     strength: 'notNull/interger',
//     dexterity: 'notNull/interger',
//     constitution: 'notNull/interger',
//     intelligence: 'notNull/interger',
//     wisdom: 'notNull/interger',
//     charisma: 'notNull/interger',
//     spells: 'canNull/string',
//     cantrips: 'canNull/string',
//     proficiencies: 'canNull/string',
//     personality: 'canNull/string',
//     ideals: 'canNull/string',
//     bonds: 'canNull/string',
//     flaws: 'canNull/string',
//     features: 'canNull/string',
//     traits: 'canNull/string',
//     },