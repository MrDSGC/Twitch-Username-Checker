import React from 'react';
import _ from 'underscore'
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel: '', avaliable: null, channels: null};
    this.handleChannelSubmit = this.handleChannelSubmit.bind(this);
  };

  handleChannelSubmit(e) {
		e.preventDefault();
		const channelQuery = this.state.channel;
		this.props.fetchChannels(channelQuery)
	};

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

  componentDidUpdate(prevProps) {

    if(prevProps !== this.props) {
      let deepSearch = _.map(this.props.channels, function(channel){
          if(channel.name === this.state.channel){
            return channel
          }}.bind(this))
          let cleanedDeepSearch = this.cleanArray(deepSearch);

          this.setState({channels: cleanedDeepSearch})
          debugger
          if(cleanedDeepSearch.length > 0) {
            this.setState({avaliable: false})
          } else {
            this.setState({avaliable: true})
          }
    }


  }

  queryOutput() {
    if(this.state.avaliable === null) {
      return(
        <div className="blank-holder">

        </div>
      )
    } else {
      if(this.state.avaliable) {
        return(
          <div className="avaliable">
            <div>
              Good for you this username is avaliable!!
            </div>
          </div>
        )
      } else {
        return(
          <div className="not-avaliable">
            <div className="message">
              Sorry, this username NOT avaliable
            </div>

            <div>
              channel was created on...
            </div>

            <div>
              channel was last updated on...
            </div>


          </div>
        )
      }
    }
  };

  render () {
    return(
      <div className="everything">
        <div className="title">
          Purge Watch
        </div>

        <div className="query-entry-form">
          <div>
            Is
          </div>

          <form className="game-form"
            onSubmit={this.handleChannelSubmit}>
            <input type="text"
              className="inputs"
              value={this.state.channel}
              onChange={this.update("channel")}/>
          </form>

          <div>
            Avaliable?
          </div>
      </div>

      <div className="query-output">
        {this.queryOutput()}
      </div>

      </div>
    )
  };
}

export default Content;
