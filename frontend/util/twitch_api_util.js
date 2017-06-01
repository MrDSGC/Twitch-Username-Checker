
export const queryChannel = (search) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/search/channels',
    headers: {
      'Client-ID': '',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { query: search,
            limit: 1
          }
  })
}
