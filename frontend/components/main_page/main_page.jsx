import React from 'react';
import ContentContainer from './content_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className='full-page'>
        <div className='content'>
          <ContentContainer />
        </div>
      </div>

    )
  };
}

export default MainPage;
