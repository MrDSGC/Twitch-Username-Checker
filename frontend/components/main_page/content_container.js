import { connect } from 'react-redux';
import { fetchUser } from '../../actions/twitch_actions'

import Content from './content';

const mapStateToProps = state => {
  return ({
    user: state.user
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: query => dispatch(fetchUser(query))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
