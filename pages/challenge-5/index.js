const pokemons = [
  { image: 'imgs/squartle.png', name: 'Squartle' },
  { image: 'imgs/pikachu.png', name: 'Pikachu' },
];

const pokemonsSelect = document.getElementById('pokemons');
const pokemonImage = document.getElementById('pokemon-image');

pokemonsSelect.innerHTML = `
  <option value="">Select a pokemon</option>
`;

pokemons.forEach((pokemon) => {
  pokemonsSelect.innerHTML += `
    <option value="${pokemon.image}">${pokemon.name}</option>
  `;
});

pokemonsSelect.addEventListener('change', (event) => {
  const image = event.target.value;
  if (!image) {
    pokemonImage.innerHTML = '';
    return;
  }

  pokemonImage.innerHTML = `
    <img src="${image}" />
  `;
});
