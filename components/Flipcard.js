import React, { Component, Fragment } from 'react';
import FlipcardContent from './FlipcardContent';

export default class Flipcard extends Component {
  constructor(props) {
    super(props);
  }

  displayName(string, limit = 17) {
    if (string.length > limit) {
      let newString = string;

      if (string.length > limit) {
        newString = string.substring(0, limit) + '...';
      }
      return newString;
    } else {
      return string;
    }
  }

  render() {
    return (
      <Fragment>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div
              className='flip-card-front'
              title={this.displayName(this.props.deck.hero.name)}
            >
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
                copy={this.props.copy}
                limit={this.displayName}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
