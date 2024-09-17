// import aa from 'search-insights';

export function handleViewClick(event) {
  console.log('In handleViewClick function!');
  console.log({ event });

  // aa('init', {
  //   appId: process.env.ALGOLIA_APP_ID,
  //   apiKey: process.env.ALGOLIA_API_KEY,
  // });

  // aa('clickedObjectIDsAfterSearch', {
  //   userToken: aa('getUserToken'),
  //   index: process.env.ALGOLIA_INDEX,
  //   eventName: 'Item View Button Clicked',
  //   queryID: event.currentTarget.queryID,
  //   objectIDs: [event.currentTarget.objectIDs],
  //   // positions: array,
  // });
}

export function handleCartClick(event) {
  console.log('In handleCartClick function!');
  console.log({ event });

  // aa('init', {
  //   appId: process.env.ALGOLIA_APP_ID,
  //   apiKey: process.env.ALGOLIA_API_KEY,
  // });

  // aa('convertedObjectIDsAfterSearch', {
  //   userToken: aa('getUserToken'),
  //   index: process.env.ALGOLIA_INDEX,
  //   eventName: 'Item Added To Cart',
  //   queryID: event.currentTarget.queryID,
  //   objectIDs: [event.currentTarget.objectIDs],
  // });
}
