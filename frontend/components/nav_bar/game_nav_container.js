import { connect } from 'react-redux';
import { receiveGenre,
         fetchChannels,
         fetchGames,
         fetchTopGames,
         receiveGenreSource
       } from '../../actions/twitch_actions';

import GameNav from './game_nav';

const mapStateToProps = state => {
  return ({
    games: state.games,
    channels: state.channels
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveGenre: genre => dispatch(receiveGenre(genre)),
    receiveGenreSource: genreSource => dispatch(receiveGenreSource(genreSource)),
    fetchTopGames: () => dispatch(fetchTopGames()),
    fetchGames: (query) => dispatch(fetchGames(query)),
    fetchChannels: (query) => dispatch(fetchChannels(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameNav);
