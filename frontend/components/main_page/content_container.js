import { connect } from 'react-redux';
// import { } from '../../actions/twitch_actions'

import Content from './content';

const mapStateToProps = state => {
  return ({
    channel: state.channel
  })
};

const mapDispatchToProps = (dispatch) => {
};


export default connect(
  mapStateToProps,
  null
)(Content);
