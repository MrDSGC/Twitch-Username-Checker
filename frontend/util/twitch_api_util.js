
export const queryUser = (search) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/users',
    headers: {
      'Client-ID': 'nrcmtymfzwx4jbwzdk36rl9yj1ln39',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { login: search}
  })
}
