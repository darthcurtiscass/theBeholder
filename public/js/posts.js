// const postsContainer = document.getElementById("postsContainer");

// // Fetch the blog posts from the backend
// fetch("")
//   .then(response => response.json())
//   .then(posts => {
//     // Loop through the posts and create HTML elements for each one
//     posts.forEach(post => {
//       const postElement = document.createElement("div");
//       postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   })
//   .catch(error => {
//     console.error("An error occurred:", error);
//   });

  const newPostHandler = async (event) => { //edit this page
    event.preventDefault();
  
    const postContent = document.querySelector("#postsContainer");
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#campaign-desc').value.trim();
  
    if (postContent) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ postContent }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const posts = await response.json();

      posts.forEach(post => {
        const postEl = document.createElement("div");
        postEl.innerHTML = `
          <h2>${post.content}</h2>
          <p>${user.name}</p>
        `;
        postsContainer.appendChild(postEl);
      })
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to create campaign');
      }
    }
  };

  document
  .querySelector('.new-post')
  .addEventListener('submit', newPostHandler);