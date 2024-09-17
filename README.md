# Algolia Solutions Assignment

This is the hiring assignment for the Customer Solutions Team at Algolia. It’s intended to mimic work you might do here, while giving us an understanding of your skills in:

- Coding
- Problem Solving
- Communication

If you want to know how we will judge the assignment, you can view our scoring rubric.

## Brief

Spencer and Williams have provided us with raw product data and a repo of their front end code. They have asked us for help to enhance their implementation and have asked that we create an Algolia application to demonstrate this to them.

### Technical Assignment - Part One (1 hrs)

Spencer and Williams are having a sale on Cameras. They would like you create and run a demo script that reduces the price of everything in the camera category by 20% and then round to the lowest full number. They have provided the raw data as products.json. The data should be transformed and sent to Algolia in a single script.

### Technical Assignment - Part Two (2 hrs)

Our customer Spencer and Williams want to use Personalisation. In order to to do this, they need to implement **_Algolia Insights_** . They have asked for us to create a demo of the events included in their provided codebase.

It is imperative that we send clicks and conversion on the result page hit results, any other events included will be a bonus.

EVENTS to capture:

- PLP reqd events (product listing pages - includes SR page):

1. clickedObjectIDsAfterSearch - product clicked
2. convertedObjectIDsAfterSearch - product added to cart

- Personalization events:

1. clickedFilters - Send a click event to capture when users select filters.
2. convertedFilters - Send a conversion event to capture the filters a user selected when converting.

- Note: if you need to add the autocomplete, must send 2 events:

1. clickedObjectIDsAfterSearch - clicked on a search result in the autocomplete menu
2. convertedObjectIDsAfterSearch - added an item to the cart from the autocomplete menu.

### Technical Assignment - Part Three (0.5 hrs)

Spencer and Williams want some guidance on their optimal relevance set up. In the Algolia index that you have uploaded the data and events to, configure the relevance so that when users are searching they are seeing the results that make most sense.

### Questions (0.5 hrs)

Please answer example customer questions in the questions directory.

### Debrief Call (Dependent on submission)

After submitting the assignment, we will we ask you to present the work that you have completed in a call with two members of the TAM team. This will be scheduled shortly after your submission of this assignment.

## Getting started

1. You'll need to sign up for an Algolia account @ https://www.algolia.com/users/sign_up.
2. You can find the product dataset in the data folder inside this repo. Feel free to use any language to perform the data transformation.
3. To run the front end of the application you will need to add your app id, api key and index name to an environment file. Copy .env.test and rename it .env adding the credentials as needed. Once added run `npm install` & `npm start` to see the UI

Everything you need to complete this assignment can be found on algolia.com/docs.

## How to submit

1. Push your code into a [code sandbox](https://codesandbox.io/) and share it with us
2. Reply to our email with a link to your code sandbox, and anything else you think is applicable
3. Provide us with [support access](https://algolia.com/account/support/) to your algolia account

## Scoring Rubric

### Technical Assignment

| Did the candidate:                                | Yes | No  |
| :------------------------------------------------ | :-- | :-- |
| Follow the instructions of the assignment?        |     |     |
| Write code that follows best-practices?           |     |     |
| Avoid over-engineering?                           |     |     |
| Demonstrate understanding of the code they wrote? |     |     |
| Demonstrate good code and process organization?   |     |     |
| Complete the assignment in an efficient manner?   |     |     |
| Ask for clarification when necessary?             |     |     |

### “Customer” Questions

| Did the candidate:                                      | Yes | No  |
| :------------------------------------------------------ | :-- | :-- | --- |
| Answer the questions correctly?                         |     |     |
| Answer in a succinct manner?                            |     |     |
| Have minimal spelling, grammar, or formatting mistakes? |     |     |
| Employ a friendly, helpful tone?                        |     |     |     |

### Overall Impressions

| Does the candidate demonstrate being in the top 10% of: | Yes | No  |
| :------------------------------------------------------ | :-- | :-- | --- |
| Technical aptitude                                      |     |     |
| Problem Solving                                         |     |     |
| Communication skills                                    |     |     |     |

-- Searchable attributes - searching attributes and nested attributes. Very noisy, not most relevant -- You want to Pick specific ones -- Custom ranking and sorting criteria -- Formula creator for ranking and sorting
