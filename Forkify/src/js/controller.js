//import {API_URL} from './config.js'
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // const id = '#5ed6604591c37cdc054bc90b';
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1. loading recipe
    await model.loadRecipe(id);

    //2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert('here>>inside contrlRecipes  ' + err);
    recipeView.renderError(err);
  }
};

const controlSearchResults = async function () {
  try {
    // 0) spinner
    resultsView.renderSpinner();
    console.log(resultsView);
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render search results
    console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));
    // resultsView.render(model.state.search.results);

    paginationView.render(model.state.search);
  } catch (err) {
    console.log('inside control search results Exception: ' + err);
  }
};

const controlPagination = function (goToPage) {
  //1) render New Results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //2) render New Pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  //note: calling the publisher inside the controller and passing the subscriber
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
