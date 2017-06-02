import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel: '', avaliable: null};
    this.handleChannelSubmit = this.handleChannelSubmit.bind(this);
  };

  handleChannelSubmit(e) {
		e.preventDefault();
		const channelQuery = this.state.channel;
		this.props.fetchChannels(channelQuery);
	};

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  queryOutput() {

  };

  render () {
    return(
      <div className="everything">
        <div>
          <div className="Title">
            Twitch Username Avaliability Checker
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
      </div>

      <div className="query-output">
        {this.queryOutput()}
      </div>

      </div>
    )
  };
}

export default Content;
