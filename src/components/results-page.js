import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  configure,
  hits,
  pagination,
  refinementList,
} from 'instantsearch.js/es/widgets';
import aa from 'search-insights';

// import { handleViewClick, handleCartClick } from '../utils/handlers';
import importJsonToIndex from '../utils/import';
import configureRelevance from '../utils/relevance';
import 'dotenv/config';

aa('init', {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_API_KEY,
  userToken: 'upasananatarajan',
  // set the following to true when using Personalization
  // useCookie: true,
  // 3 months
  // cookieDuration: 7776000000,
});

window.aa = aa;

// might be valuable to track how many times this category facet (20% off on a sale) was clicked
aa('clickedFilters', {
  userToken: aa('getUserToken'),
  index: process.env.ALGOLIA_INDEX,
  eventName: 'Cameras Category Clicked',
  filters: ['categories:Cameras%20&%20Camcorders'],
});

// might be valuable to track if this category facet was selected when a user converted
aa('convertedFilters', {
  userToken: aa('getUserToken'),
  index: process.env.ALGOLIA_INDEX,
  eventName: 'Cameras Category Converted',
  filters: ['categories:Cameras%20&%20Camcorders'],
});

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page.
 */

class ResultPage {
  constructor() {
    this._setIndexAndSettings = false;
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    // initialize the index (if the index does not yet exist, will be automatically created)
    const searchIndex = this._searchClient.initIndex(process.env.ALGOLIA_INDEX);

    // batch import data and set settings only once
    if (this._setIndexAndSettings === false) {
      importJsonToIndex(searchIndex);
      configureRelevance(searchIndex);
      this._setIndexAndSettings = true;
    }

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
      // enable Insights
      insights: true,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance.
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
        placeholder: 'Search electronics, appliances, and more...',
      }),
      // configure({
      //   userToken: aa('getUserToken'),
      //   enablePersonalization: true,
      // }),
      hits({
        container: '#hits',
        templates: {
          // item: resultHit,
          item: (hit, { html, sendEvent }) => html` <a class="result-hit">
            <div class="result-hit__image-container">
              <img class="result-hit__image" src="${hit.image}" />
            </div>
            <div class="result-hit__details">
              <h3 class="result-hit__name">${hit.name}</h3>
              <p class="result-hit__price">$${hit.price}</p>
            </div>
            <div class="result-hit__controls">
              <button
                id="view-item"
                class="result-hit__view"
                onClick="${(event) => {
                  // override default click event
                  event.stopPropagation();
                  sendEvent('click', hit, 'Item View Button Clicked');
                }}"
              >
                View
              </button>
              <button
                id="add-to-cart"
                class="result-hit__cart"
                onClick="${() => {
                  // no default conversion event
                  sendEvent('conversion', hit, 'Item Added To Cart');
                }}"
              >
                Add To Cart
              </button>
            </div>
          </a>`,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
        // templates: {
        //   item: (facet, { html }) => html`<a
        //     class="category-facet"
        //     onClick="${() => {
        //       // Check if the clicked facet is 'Cameras & Camcorders'
        //       if (facet.label === 'Cameras & Camcorders' && facet.isRefined) {
        //         aa('clickedFilters', {
        //           userToken: aa('getUserToken'),
        //           index: process.env.ALGOLIA_INDEX,
        //           eventName: 'Cameras Category Clicked',
        //           filters: ['categories:Cameras%20&%20Camcorders'],
        //         });
        //       }
        //       return facet;
        //     }}"
        //   >
        //     ${facet.label}
        //   </a>`,
        // },
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
