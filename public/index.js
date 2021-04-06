const form = document.getElementById('searchJoke');
const ul = document.getElementById('dadJokes');

const appendJoke = (joke) => {
  const li = document.createElement('li');
  li.textContent = `${joke.joke}`;
  ul.appendChild(li);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  try {
    const fd = new FormData(form);

    const fetchJoke = async () =>
      await fetch(`/api/v1/jokes/${fd.get('search')}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          joke: fd.get('joke'),
        }),
      });
    const fetchString = JSON.stringify(fetchJoke());
    appendJoke(fetchString);
    console.log(fetchJoke);
    // return fetchJoke();
  } catch (err) {
    // console.log(err.message);
  }
});
