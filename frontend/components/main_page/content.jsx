import React from 'react';
import _ from 'underscore'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel: '', available: null, channels: null};
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
          if(cleanedDeepSearch.length > 0) {
            this.setState({available: false})
          } else {
            this.setState({available: true})
          }
    }
  }

  dateParse(string_date) {
    let date = string_date.slice(0,10)
    let year = string_date.slice(0,3)
    let day = string_date.slice(5,6)
    let month = this.parseMonth(string_date.slice(8,9))

    debugger
    output = '${month} ${day} ${year}' // not interperlating need to fix

    return output
  }

  parseMonth(month) {
    const months = {
      '01': 'January',
      '02': 'Feburary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }

    return(months.month) //notsure if this works, need to check
  }

  queryOutput() {
    if(this.state.available === null) {
      return(
        <div className="welcome">
          <div className="welcome-message">
            Find out if a twitch username has been
          </div>
          <div className="purged">
            PURGED
          </div>
        </div>
      )
    } else {
      if(this.state.available) {
        return(
          <div className="available">
            <div>
              Good for you this username is available!!
            </div>
          </div>
        )
      } else {
        return(
          <div className="not-available">
            <div className="message">
              Sorry, this username NOT available
            </div>

            <div>
              channel was created on {this.dateParse(this.state.channels[0].created_at)}
            </div>

            <div>
              channel was last updated on {this.dateParse(this.state.channels[0].updated_at)}
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
          <div className="form-text">
            Is
          </div>

          <form className="channel-form"
            onSubmit={this.handleChannelSubmit}>
            <input type="text"
              className="inputs"
              value={this.state.channel}
              onChange={this.update("channel")}/>
          </form>

          <div className="form-text">
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
