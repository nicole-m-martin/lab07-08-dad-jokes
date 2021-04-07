const form = document.getElementById('searchJoke');
const ul = document.getElementById('dadJokes');

const appendJoke = (joke) => {
  const li = document.createElement('li');
  li.textContent = `${joke.joke}`;
  ul.appendChild(li);
};

const fetchJoke = async (fd) =>
  await fetch(`/api/v1/jokes/${fd.get('search')}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fd = new FormData(form);

  console.log(fetchJoke());
  const getAJoke = fetchJoke(fd);
});
