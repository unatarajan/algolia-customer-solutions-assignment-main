import _ from 'lodash';

export default function importJsonToIndex(index) {
  // import products array from JSON data file
  const products = require('../../data/products.json');

  // update prices of Cameras on sale
  const updatedForSale = products.map((product) => {
    if (product.categories[0] === 'Cameras & Camcorders') {
      // deep clone current product
      const onSaleClone = _.cloneDeep(product);
      // reduce price on the clone
      onSaleClone.price = Math.floor(0.8 * product.price);
      return onSaleClone;
    }
    // if the product is not a Camera, no changes made
    return product;
  });

  // 10,000 products total to import into the Algolia index
  // Best Practice: batch import the updated data in chunks
  const chunks = _.chunk(updatedForSale, 1000);
  chunks.forEach((chunk) => index.saveObjects(chunk));
}
