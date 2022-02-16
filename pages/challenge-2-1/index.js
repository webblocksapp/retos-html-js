const citiesList = document.getElementById('cities-list');
const countryField = document.querySelector("[name='country']");
const allCities = [
  { name: 'Medellín', country: 'Colombia' },
  { name: 'Bogotá', country: 'Colombia' },
  { name: 'Quito', country: 'Ecuador' },
  { name: 'Ciudad de méxico', country: 'México' },
  { name: 'Lima', country: 'Perú' },
];

countryField.addEventListener('change', (event) => {
  filterCitiesByCountry(event.target.value);
  listCities();
});

let cities = allCities;

const filterCitiesByCountry = (country) => {
  cities = allCities.filter((city) => Boolean(city.country.match(country)));
};

const listCities = () => {
  citiesList.innerHTML = '';
  cities.forEach((city) => {
    citiesList.innerHTML += `
      <li>Ciudad: ${city.name}, País: ${city.country}</li>
    `;
  });
};

listCities();
