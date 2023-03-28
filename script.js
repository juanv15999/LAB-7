function createPost(name, message, imageURL) {
  return `
    <div class="post">
      <img src="${imageURL}" alt="${name}">
      <h2>${name}</h2>
      <p>${message}</p>
    </div>
  `;
}

const numPosts = 826;
const imageURL = 'https://rickandmortyapi.com/api/character/avatar/1';

const postsContainer = document.getElementById('posts-container');
for (let i = 1; i <= numPosts; i++) {
  const name = `Personaje ${i}`;
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const imgURL = `${imageURL}${i}.jpeg`;
  const postHTML = createPost(name, message, imgURL);
  postsContainer.innerHTML += postHTML;
}
