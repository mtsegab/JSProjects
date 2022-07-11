import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! please try again';
  _message = '';

  _generateMarkup() {
    console.log('*inside _generateMarkupPreview*******');
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('')
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#23456">
      <figure class="preview__fig">
        <img src="${result.image}" alt=${result.title} />
      </figure>
      <div class="preview__result">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
    </li>
    `;
  }
}

export default new ResultsView();
