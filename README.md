# Twitch Username Check

[TwtichPurge Live](www.twitchpurge.us)

TwitchPurge is a quick project i designed in response to twitch's announcement about their username purge in Jan 2017. I thought it would be nice to have a tool to check if a username has been taken or not. It features React.js with a Redux architectural framework for it's front end and uses Twitch's API endpoints to display it's views.


## Features

### Search

This is a pretty simple project that just hits the twitch `Get Users` API endpoint with a query to find any accounts with the entered username. Then the account date info is displayed along with a available or unavailable message for the user.

```javascript
  dateParse(string_date) {
    let date = string_date.slice(0,10)

    let dateParsed = new Date(date)
    let output = dateParsed.toDateString();

    return output
  }

```
The `created_at` and `updated_at` data twitch sent back was in del phi format and had to be parsed into a displayable javascript Date object.

### Use Case

I feel this would be pretty useful tool to check the likelihood of a username you want getting purged based on the creation date and update date of the current account owning that username.

### Limitations

* The `Get Users` API endpoint will not return accounts Closed due to terms of service violations.
