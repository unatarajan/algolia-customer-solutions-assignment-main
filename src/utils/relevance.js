export default function configureRelevance(index) {
  index.setSettings({
    // excluded 'unordered(description)' from searchableAttributes because it's not rendered in the resultHit HTML template string
    searchableAttributes: ['unordered(name)'],
    customRanking: [
      // upsort lowest prices and free_shipping
      'asc(price)',
      'desc(free_shipping)',
      // Assumption: lower rating and popularity means better rated and more popular
      'asc(rating)',
      'asc(popularity)',
    ],
    attributesForFaceting: ['brand', 'categories'],
  });
}
