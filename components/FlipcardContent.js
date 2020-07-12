import React, { Component, Fragment } from 'react';

export default class FlipcardContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className='content'>
          <div className='content-header'>
            <div className='hero'>
              <h1>
                {this.props.deck.hero.isRanged ? (
                  <i className='fas fa-meteor' title='Ranged'></i>
                ) : (
                  <i className='fas fa-fist-raised' title='Melee'></i>
                )}{' '}
                <i className='fas fa-heart'></i> {this.props.deck.hero.hp}{' '}
                <i className='fas fa-shoe-prints'></i>{' '}
                {this.props.deck.hero.move}
              </h1>
            </div>
            <div className='sidekick' title={this.props.deck.sidekick.name}>
              <h1>
                {this.props.deck.sidekick.isRanged ? (
                  <i className='fas fa-meteor' title='Ranged'></i>
                ) : (
                  <i className='fas fa-fist-raised' title='Melee'></i>
                )}{' '}
                <i className='fas fa-heart'></i> {this.props.deck.sidekick.hp}{' '}
              </h1>
            </div>
          </div>
          <div className='ability'>
            <span>
              {this.props.limit(this.props.deck.hero.specialAbility, 220)}
            </span>
          </div>
          <div className='content-footer'>
            <a href={this.props.record.BGG} target='_blank'>
              <i className='fas fa-file-alt'></i> BGG
            </a>
            <span>
              <a
                className='button'
                onClick={() => this.props.copy(this.props.deck)}
              >
                Copy Deck
              </a>
            </span>
          </div>
        </div>
        <style jsx>{`
          .sidekick:after {
            content: attr(title);
            position: absolute;
            font-size: 0.6rem;
            top: 5px;
          }

          .content-footer {
            display: inline-flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .button {
            cursor: pointer;
            padding: 0.5em;
            background-color: #48284f;
            color: #e7cc98;
            font-size: 0.8rem;
            border-radius: 2em;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          i {
            padding-left: 0.3em;
          }

          .fa-heart {
            color: #de2630;
          }

          .fa-shoe-prints {
            color: #936349;
          }

          .ability {
            font-size: 0.8rem;
            padding: 1em;
          }
        `}</style>
      </Fragment>
    );
  }
}
