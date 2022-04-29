import './sass/main.scss';

import API from './js/apiService';
import getRefs from './js/get-refs';

// import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';

import cardTpl from './templates/card.hbs';
import getRootDir from 'parcel-bundler/lib/utils/getRootDir';

  // defaultModules.set(PNotifyMobile, {});
 
  // alert({
  //   text: 'Notice me, senpai!'
  // });
///////////////////////////////////////////////////
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
