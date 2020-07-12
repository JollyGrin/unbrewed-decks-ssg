import React, { Component, Fragment } from 'react';
import FlipcardContent from './FlipcardContent';

export default class Flipcard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* {console.log('record', this.props.record)} */}
        {console.log('deck', this.props.deck)}
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front' title={this.props.deck.hero.name}>
              <img
                src={
                  this.props.record.IMGurl
                    ? this.props.record.IMGurl
                    : 'https://picsum.photos/300/200'
                }
                alt='Avatar'
              />
            </div>
            <div className='flip-card-back'>
              <FlipcardContent
                deck={this.props.deck}
                record={this.props.record}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
