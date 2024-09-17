_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

--

From: <upasana.natarajan@algolia.com>

Subject: Re: Bad design

Hello Marissa,

First, let me apologize for any inconvenience caused by our teams' updates to the Algolia Dashboard. The purpose of the extensive Dashboard redesign was two-fold: to fix broken features and numerous user-reported issues; and to accommodate future features that will deliver a greater value to all of our customers. We detail the fixes and our design thinking behind the new Dashboard UX in this blog (https://www.algolia.com/blog/product/introducing-our-new-navigation/) written by our Director of Product Design & Research. In brief, we now reserve the left-hand sidebar for navigating between products, and app and index functions now reside at the top center of the Dashboard.

You're correct in saying it now takes several clicks to clear or delete indices via the Dashboard. To speed up your iteration workflow, we highly recommend you install and use the Algolia Command Line Interface going forward. Managing your indices via CLI is a zero-click process.

There are only 2 setup steps (<5 mins):

1. Install the CLI: https://www.algolia.com/doc/tools/cli/get-started/overview/.
2. Create 1+ Algolia profile(s) to authenticate to your account and application(s): https://www.algolia.com/doc/tools/cli/get-started/authentication/.

For your default profile, use the App ID of the application you iterate on most. If you need to manage indices across multiple applications, create a profile for each app and pass the correct app's profile after the "--profile" flag when running the CLI commands. Here are the commands to help you manage your profiles: https://www.algolia.com/doc/tools/cli/commands/algolia-profile/.

3. CLI commands to run:

To clear records from an index but retain the index and its configuration settings, run "algolia index clear YOUR_INDEX_NAME --profile YOUR_PROFILE_NAME".

To delete an index and its configuration, run "algolia index delete YOUR_INDEX_NAME --profile YOUR_PROFILE_NAME".

For more info on clearing or deleting indices, see this CLI reference doc: https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/.

After running these commands, you can double-check in the Dashboard to confirm your indices are cleared/ deleted.

We realize that many users aren't comfortable making sweeping changes (i.e. clearing records, deleting indices) via command line. We're committed to providing you with a superior Dashboard experience. I will pass your feedback (that it takes too many clicks in the Dashboard to reach and perform these index operations) to our teams to incorporate into future UX iterations.

Thank you and please reach out if you need any additional assistance getting up-and-running with the Algolia CLI.

Upasana

--

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

--

From: <upasana.natarajan@algolia.com> Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!

Hello Carrie,

We're sorry to hear about the disruption and difficulties your users are facing, and are committed to getting your site back up-and-running asap.

To ensure good product performance for all of our users, Algolia enforces record size limits based on your plan. As a paid plan customer, your max size per record is 100 KB. The metadata your team adds to each user's post likely increases each record's total size above 100 KB, so Algolia returns the error "Record is too big".

As the errors started today at 9:15am:

1. check which metadata were added prior to the disruption,
2. stop adding those specific metadata to your users' posts, and
3. re-test.

Whether the error persists or resolves, the next step would be to further reduce your record sizes by removing any and all metadata/ attributes you don't need for search, display, and/or ranking. Your team can use this doc as a guide: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/.

Please reach out if you need any additional guidance,

Upasana

--

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

--

From: <upasana.natarajan@algolia.com> Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!

Hello Marc,

Thank you for sharing the website error message. We will need to gather more info about your search implementation to resolve this issue.

"Uncaught ReferenceError: searchkit is not defined" indicates the Searchkit library is not recognized. It's either not installed or not imported (correctly) into files using Searchkit in your project.

Since Searchkit may be used with Algolia instantsearch and autocomplete (here's an example autocomplete integration: https://www.searchkit.co/docs/components/autocomplete), how are you integrating Searchkit with Algolia in your application?

As a starting point, can you share your project repo, or at minimum, the index.js file causing the error?

Upasana

--
