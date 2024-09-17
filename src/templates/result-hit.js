/* NOTE:
- Updated `hit._highlightResult.name.value` to `hit.name` because when I console logged the `hit` object, `hit._highlightResult` didn't have a `name` property.
*/

const resultHit = (hit) => `<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit.name}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button id="view-item" class="result-hit__view">View</button>
    <button id="add-to-cart" class="result-hit__cart">Add To Cart</button>
  </div>
</a>`;

export default resultHit;
