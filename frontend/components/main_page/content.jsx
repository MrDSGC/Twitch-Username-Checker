import React from 'react';
import _ from 'underscore'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', available: null};
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  };

  handleUserSubmit(e) {
		e.preventDefault();
		const userQuery = this.state.user;
		this.props.fetchUser(userQuery)
	};

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps) {
    if(prevProps.user !== this.props.user) {
      if(this.props.user.length > 0) {
        this.setState({available: false})
      } else {
        this.setState({available: true})
      }
    }
  }

  dateParse(string_date) {
    let date = string_date.slice(0,10)

    let dateParsed = new Date(date)
    let output = dateParsed.toDateString(); // needs to be parsed by Date

    return output
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
      if(this.state.available || this.props.user.length < 1) {
        return(
          <div className="available">
            <div className="available-message">
              This username MIGHT be available!
            </div>

            <div>
              <a href="https://github.com/MrDSGC/Twitch-Username-Checker">
                Not actually available? Here's why.
              </a>
            </div>
          </div>
        )
      } else {
        return(
          <div className="not-available">
            <div className="message-holder">
              <div className="message-1">
                Sorry, this username is
              </div>
              <div className="message-2">
                NOT
              </div>
              <div className="message-3">
                available
              </div>
            </div>

            <div className="created-at">
              This account was created on {this.dateParse(this.props.user[0].created_at)}
            </div>

            <div className="updated-at">
              This account was last updated on {this.dateParse(this.props.user[0].updated_at)}
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
            onSubmit={this.handleUserSubmit}>
            <input type="text"
              className="inputs"
              value={this.state.user}
              onChange={this.update("user")}/>
          </form>

          <div className="form-text">
            Avaliable?
          </div>
      </div>

      <div className="query-output">
        {this.queryOutput()}
      </div>

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

export default Content;
