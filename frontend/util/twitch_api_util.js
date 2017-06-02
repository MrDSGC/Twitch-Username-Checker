
export const queryChannel = (search) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/search/channels',
    headers: {
      'Client-ID': 'nrcmtymfzwx4jbwzdk36rl9yj1ln39',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { query: search,
            limit: 100
          }
  })
}
