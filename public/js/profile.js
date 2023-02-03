const newCampaignHandler = async (event) => { //edit this page
  event.preventDefault();

  const name = document.querySelector('#campaign-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const quest = document.querySelector('#campaign-desc').value.trim();

  if (name && quest) {
    const response = await fetch(`/api/campaigns`, {
      method: 'POST',
      body: JSON.stringify({ name, quest }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile/user');
    } else {
      alert('Failed to create campaign');
    }
  }
};

const newCharacterHandler = async (event) => { //edit this page
  event.preventDefault();

  const name = document.querySelector('#character-name').value.trim();
  const race = document.querySelector('#character-race').value.trim();
  const character_class = document.querySelector('#character-class').value.trim();
  const subclass = document.querySelector('#character-subclass').value.trim();
  const level = document.querySelector('#character-level').value.trim();
  const alignment = document.querySelector('#character-aligment').value.trim();
  const hitpoints = document.querySelector('#character-hp').value.trim();
  const experience_points = document.querySelector('#character-exp').value.trim();
  const speed = document.querySelector('#character-speed').value.trim();
  const strength = document.querySelector('#character-strength')
  const dexterity = document.querySelector('#character-dexterity').value.trim();
  const constitution = document.querySelector('#character-constitution').value.trim();
  const intelligence = document.querySelector('#character-intel').value.trim();
  const wisdom = document.querySelector('#character-wisdom').value.trim();
  const charisma = document.querySelector('#character-charisma').value.trim();
  

  if (name && race && character_class && subclass && level && alignment && hitpoints && experience_points && speed && strength && dexterity && constitution && intelligence && wisdom && charisma) {
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      body: JSON.stringify({ name, race, character_class, subclass, level, alignment, hitpoints, experience_points, speed, strength, dexterity, constitution, intelligence, wisdom, charisma }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile/user');
    } else {
      console.log(response)
      alert('Failed to create character');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-campaign-form')
  .addEventListener('submit', newCampaignHandler);

  document
  .querySelector('.new-character-form')
  .addEventListener('submit', newCharacterHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
