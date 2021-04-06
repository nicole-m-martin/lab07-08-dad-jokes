const form = document.getElementById('createJoke');
const ul = document.getElementById('jokes');

const appendJoke = (joke) => {
  const li = document.createElement('li');
  li.textContent = `${joke.name}: ${joke.joke}`;
  ul.appendChild(li);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fd = new FormData(form);

  fetch('/api/v1/jokes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: fd.get('name'),
      joke: fd.get('joke'),
    }),
  })
    .then((res) => res.json())
    .then(appendJoke);
});

fetch('/api/v1/jokes')
  .then((res) => res.json())
  .then((jokes) => {
    jokes.forEach(appendJoke);
  });
