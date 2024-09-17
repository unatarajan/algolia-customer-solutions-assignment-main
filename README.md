# Algolia Solutions Assignment - Upasana Natarajan's Submission

### Technical Assignment - Part One (1 hrs)

PROMPT:

Spencer and Williams are having a sale on Cameras. They would like you create and run a demo script that reduces the price of everything in the camera category by 20% and then round to the lowest full number. They have provided the raw data as `products.json`. The data should be transformed and sent to Algolia in a single script.

MY RESPONSE:

- See `src/utils/import.js` for the script, encapsulated in a function. The function is called in `src/components/results-page.js`.
- The script runs when you run `npm start` and loads the application on `localhost:3000`. It applies the data transformation without changing the `products.json` and uploads the updated dataset to your Algolia index.

ITERATION/ CLARIFICATION QUESTIONS FOR SOLUTIONS ARCHITECTS/ TAMs:

1. My script reduces the price of everything in the `Cameras & Camcorders` category. (I went by the prompt verbiage "reduces the price of everything in the camera category".) After searching a bit, I see that this category includes Camera Cleaning Kits, Cases, Bags, Slings, etc. as well as just regular Cameras.

Should I try to restrict results to just Cameras (including or excluding Security Cameras, Phone Cameras, etc.)? Or should I extend the sale to other categories that are not strictly `Cameras & Camcorders`?

2. Should each camera product's `price_range` (of type string) also be updated for the sale, since a camera product's value at 20% off may fall below the lower limit of the `price_range`? For example: `objectID`: 9893038 has a `price_range`: "500 - 2000" and `price`: 439 (20% off).

I thought of transforming ALL the raw products' `price_range`s from strings to a tuple of 2 numbers, [min, max]; and for Camera products only, updating the min to match the sale price of the Camera if the sale price is the lower of the two. If you disagree, can you hint at a better approach?

### Technical Assignment - Part Two (2 hrs)

PROMPT:

Our customer Spencer and Williams want to use Personalisation. In order to to do this, they need to implement **_Algolia Insights_** . They have asked for us to create a demo of the events included in their provided codebase.

It is imperative that we send clicks and conversion on the result page hit results, any other events included will be a bonus.

MY RESPONSE:

- I used the doc [Plan your implementation ](https://www.algolia.com/doc/guides/sending-events/guides/plan/) to decide which events to capture.

  - PLP required events (search results page):

  1. clickedObjectIDsAfterSearch - product clicked
  2. convertedObjectIDsAfterSearch - product added to cart

  - Personalization events:

  1. clickedFilters - users clicked filter(s).
  2. convertedFilters - capture the filters a user selected when converting.

  - Autocomplete events:

  1. clickedObjectIDsAfterSearch - clicked on a search result in the autocomplete menu
  2. convertedObjectIDsAfterSearch - added an item to the cart from the autocomplete menu.

- To more easily debug some issues I had, I moved the HTML template string returned by the `resultHit` function into `src/components/result-page.js`.

- CHALLENGE #1: I got stuck trying to implement the click and conversion events for the search results page.

  - The instantsearch `hits` widget exposes a `sendEvent` function to send click/ conversion events. However, the custom events I set (a click event called `Item View Button Clicked` and a conversion event called `Item Added To Cart`) do NOT send when I click either the View or Add To Cart buttons. Every time I click, only the default `Hit Clicked` event is sent.
  - I found that each `<li class="ais-Hits-item">` (the element that contains a search result/ object record) already has a click event listener applied to send a `Hit Clicked` event, and this probably overrides the custom click listeners I'm applying specifically on the buttons using `sendEvent`. I still haven't found a workaround or solution for this.

  - ASIDE: Ignore `src/utils/handlers.js`. These were the handler functions I was going to pass to the View and Add To Cart buttons before I realized there was a simpler approach with `sendEvent`.
    - I console logged a lot in these functions to determine whether my custom click event handlers were even being called when I clicked on either of the buttons on any product. This helped me determine that my custom event handlers weren't being called.

- CHALLENGE #2/ NICE-TO-HAVE: I couldn't figure out how to implement the Personalization events. I tried implementing `clickedFilters` in the `categories` `refinement-list` (see lines 150-168 in `results-page.js`), but it's an incorrect setup as no custom `Cameras Category Clicked` event is sent when I click the `Cameras & Camcorders` category. Only the default `Filter Applied` click event is sent when I click any filter.
  - There are hints in `results-page.js` that I tried to programmatically set up Personalization (see the `configure` widget at line 98, and the Analytics Agent initialization using cookies at lines 21-24). I didn't get Personalization fully working. I had to manually toggle on `Enable automatic events collection` in the Dashboard > Events > Settings.

```
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
```

- CHALLENGE #3/ NICE-TO-HAVE: I ran out of time before I got to implement [integrating Autocomplete with InstantSearch.js searchbox](https://www.algolia.com/doc/ui-libraries/autocomplete/integrations/with-instantsearch/) and query suggestions. This would have really enriched the experience, but I focused most of my effort towards fixing Challenge #1.

ITERATION/ CLARIFICATION QUESTIONS FOR SOLUTIONS ARCHITECTS/ TAMs:

For Challenge #1:

1. Using `event.stopPropagation()` doesn't stop the default click event from firing. Why?
2. Why don't both the default event and my custom event fire?

### Technical Assignment - Part Three (0.5 hrs)

PROMPT:

Spencer and Williams want some guidance on their optimal relevance set up. In the Algolia index that you have uploaded the data and events to, configure the relevance so that when users are searching they are seeing the results that make most sense.

MY RESPONSE:

- See `src/utils/relevance.js` for the script, encapsulated in a function. The function is called in `src/components/results-page.js`.
- The script runs when you run `npm start` and loads the application on `localhost:3000`. It applies the index configuration settings for textual relevance and custom ranking.

ITERATION/ CLARIFICATION QUESTIONS FOR SOLUTIONS ARCHITECTS/ TAMs:

1. I excluded brand and categories from the searchable attributes, as both are faceted attributes and "filterable" using the refinements lists on the left hand side of the search results in the UI. Does it make sense to make one or both of these attributes also searchable?

2. I thought of including an `on_sale` boolean attribute in every object when I transform the data, to be set to `true` for the `Cameras & Camcorders` category products only. This attribute could also be included in the custom ranking, as customers are usually more interested in clicking products indicated to be on sale.
