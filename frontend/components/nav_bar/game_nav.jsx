import React from 'react';
import FontAwesome from 'react-fontawesome';


class GameNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = { game: "", channel: "", topList: true}
    this.handleGameGenreChange = this.handleGameGenreChange.bind(this);
    this.handleChannelGenreChange = this.handleChannelGenreChange.bind(this);
    this.gamesList = this.gamesList.bind(this)
    this.channelsList = this.channelsList.bind(this)
    this.update = this.update.bind(this)
    this.handleGameSubmit = this.handleGameSubmit.bind(this)
    this.handleChannelSubmit = this.handleChannelSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchTopGames();
  }


  handleGameGenreChange(genre) {
    return(() => {
      this.props.receiveGenre(genre)
      this.props.receiveGenreSource("game")
      }
    )
  }

  handleChannelGenreChange(genre) {
    return(() => {
      this.props.receiveGenre(genre)
      this.props.receiveGenreSource("channel")
      }
    )
  }

  games() {
    return(
      this.props.games.map( (game, idx) => {
        return(
          <li className="game-item"
            onClick={this.handleGameGenreChange(game.game.name)}
            key={idx}>
            <img className="logo" src={game.game.box.small}></img>
            <div className="game-item-title">
              {game.game.name}
            </div>
          </li>
        )
      })
    )
  }

  gamesList() {

    if(this.state.topList) {
      return(
        <ul className="game-list">
          <li className="game-item"
            onClick={this.handleGameGenreChange('Trending')}
            key={26}>
            <div className="trending">
              <i className="fa fa-twitch" aria-hidden="true"></i>
            </div>
            <div className="game-item-title">Trending</div>
          </li>
          {this.games()}
        </ul>
      )
    } else {
      if(this.props.games === null) {
        return(
          <ul className="game-list">
            <div className="no-channels-message">
              <div>
                Game Not Found!
              </div>
            </div>
          </ul>
        )
      } else {
        return(
          <ul className="game-list">
            {this.props.games.map( (game, idx) => {
              return(
                <li className="game-item"
                  onClick={this.handleGameGenreChange(game.name)}
                  key={idx}>
                  <img className="logo" src={game.box.small}></img>
                  <div className="game-item-title">
                    {game.name}
                  </div>
                </li>
              )
            })}
          </ul>
        )
      }
    }
  }

  channelsList() {

    if(this.props.channels.length === 0) {
      return(
        <div className="no-channels-message">
          <div>
            Search Channels Here!
          </div>
        </div>
      )
    } else {
      return (
        this.props.channels.map( (channel, idx) => {
          return(
            <li className="game-item"
              onClick={this.handleChannelGenreChange(channel.name)}
              key={idx}>
              <img className="logo" src={channel.logo}></img>
              <div className="game-item-title">
                {channel.name}
              </div>
            </li>
          )
        })
      )

    }
  }

  handleGameSubmit(e) {
		e.preventDefault();
		const gameQuery = this.state.game;
		this.props.fetchGames(gameQuery);
    this.setState({topList: false});
	}

  handleChannelSubmit(e) {
		e.preventDefault();
		const channelQuery = this.state.channel;
		this.props.fetchChannels(channelQuery);
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
    console.log(this.state);
  }

  gameSearchBar() {
    return(
      <form className="game-form"
        onSubmit={this.handleGameSubmit}>
        <input type="text"
          className="inputs"
          value={this.state.game}
          placeholder="Search Games"
          onChange={this.update("game")}/>
      </form>
    )
  }

  channelSearchBar() {
    return(
      <form className="game-form"
        onSubmit={this.handleChannelSubmit}>
        <input type="text"
          className="inputs"
          value={this.state.channel}
          placeholder="Search Channels"
          onChange={this.update("channel")}/>
      </form>
    )
  }

  render () {
    return(
    <div className="nav-bar">
      <div className='game-title'>
        Twitch Klips
      </div>

      <div className="search-bar">
        {this.gameSearchBar()}
        <div className="mag">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>

      {this.gamesList()}

      <div className="search-bar">
        {this.channelSearchBar()}
        <div className="mag">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>

      <ul className="game-list">
        {this.channelsList()}
      </ul>

      <div className="footer">
        <ul className="footer-list">
          <li className="f-list-item">
            <a href="https://github.com/mrdsgc"
               target="_blank"
               className="fa fa-github"
               id="font-awesome-icon">
               <span className="f-label">GitHub</span></a>
          </li>
          <li className="f-list-item">
            <a href="https://www.linkedin.com/in/dcheng47"
               target="_blank"
               className="fa fa-linkedin"
               id="font-awesome-icon">
               <span className="f-label">LinkedIn</span>
            </a>
          </li>
          <li className="f-list-item">
            <a href="http://www.danielscheng.com"
               target="_blank"
               className="fa fa-id-card"
               id="font-awesome-icon">
               <span className="f-label">Portfolio</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
  };

}

export default GameNav;
