# Twitch Username Check

[TwtichPurge Live](www.twitchpurge.us)

TwitchPurge is a quick project i designed in response to twitch's announcement about their username purge in jan 2017. I thought it would be nice to have a tool to check if a username has been taken or not. It features React.js with a Redux architectural framework for it's front end and uses Twitch's API endpoints to display it's views.


## Features

### Search

This is a pretty simple project that just hits the twitch search API with a query to find the top 100 most followed (limit is 100) channels relevant to the query. Then, the list is checked to see if any of these channels actually have the username equal to the query and returns either an empty array if none are found, or an array of 1 channel that matches the query. then the channel date info is displayed along with a available or unavailable message for the user.

###Use Case

I feel this would be pretty useful to check if the username you want is active based on the creation date and update date of the channel. Due to the limitations of the Search API the search is not as effective as i would have liked.

### Limitations

* Since the Search API endpoint returns only 100 of the top channels, more obscure channels may not be included by the search.
* Banned Channels will not have their usernames re-released
* Search API endpoint returns channels by most followed instead of relevance so channels with 0 followers may be missed
