import React from 'react';
import Modal from 'react-modal';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  viewOutput() {
    if(this.props.clip === '') {
      return(
        <div className="welcome-page">
          <div className="welcome-title">
            Welcome to Twitch Klips
          </div>

          <div className="welcome-blurb">
            <text>
              Find all the top clips for any game or channel on twitch!
            </text>

            <text className="contact">
              Questions and suggestions can be directed to dcheng47@gmail.com
            </text>

          </div>

          <div className="welcome-game-search">
            <div className="left-arrow"/>
            <div className="welcome-text">
              Select or search for games on the left
            </div>
          </div>

          <div className="welcome-channel-search">
            <div className="left-arrow"/>
            <div className="welcome-text">
              Search and select for your favorite channels on the left
            </div>
          </div>

          <div className="welcome-clip-list">
            <div className="welcome-text">
              Select a clip from the list below
            </div>
            <div className="down-arrow"/>
          </div>
        </div>
      )
    } else {
      return(
        <iframe
          className="content"
          src={this.props.clip}
          width='900'
          height='500'
          frameBorder='0'
          scrolling='no'
          align='middle'
          allowFullScreen='true'></iframe>
      )
    }
  }

  render () {
    return(
      <div className="clip-view-window">
        {this.viewOutput()}
      </div>
    )
  };
}

export default ClipView;
