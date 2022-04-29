import './sass/main.scss';

import API from './js/apiService';
import getRefs from './js/get-refs';
import cardTpl from './templates/card.hbs';

const refs = getRefs();

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchCity(searchQuery)
    .then(renderCityCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}
refs.searchForm.addEventListener('submit', onSearch);

function renderCityCard(city) {
  const markup = cardTpl(city);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Something wrong');
}
