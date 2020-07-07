import React, { Component, Fragment } from 'react';

export default class Flipcard extends Component {
  render() {
    return (
      <Fragment>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front' title='King Arthur'>
              <img src='https://picsum.photos/300/200' alt='Avatar' />
            </div>
            <div className='flip-card-back'>
              <div className='content'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
