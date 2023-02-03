const newCampaignHandler = async (event) => { //edit this page
  event.preventDefault();

  const name = document.querySelector('#campaign-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#campaign-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/campaigns`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
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
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#character-data').value.trim();

  if (name && description) {
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
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
