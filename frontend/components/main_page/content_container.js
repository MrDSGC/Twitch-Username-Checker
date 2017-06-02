import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/twitch_actions'

import Content from './content';

const mapStateToProps = state => {
  return ({
    channels: state.channel
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: query => dispatch(fetchChannels(query))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
