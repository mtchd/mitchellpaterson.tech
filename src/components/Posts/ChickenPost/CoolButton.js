import React, { Component } from 'react';
import styled, { css } from 'styled-components'

import media from '../../../../utils/media'

const activeStyles = css`
  &:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`

const CoolButton = styled.button`
  color: ${props => props.theme.baseTextColour};
  position: relative;
  background: transparent;
  line-height: inherit;
  border-color: currentColor;
  top: 40px;
  left: 50%;
  display: inline-block;
  transform: translate(-50%, -50%);
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  margin-top: 4rem;
  border-width: medium;
  transition: color .3s ease-in-out .1s,border-color .3s ease-in-out .1s;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: .6px;
  margin-left: 2rem;
  :first-of-type {
    margin-left: 0;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    height: 2px;
    background: currentColor;
    right: 0;
    transition: width .3s cubic-bezier(.37,0,.21,1.02);
  }
  &:hover, &.active {
    ${activeStyles}
    text-decoration: none;
  }
  ${media.mobile`
    font-size: 1.125rem;
  `}
`

class Counter extends Component {
  state = {
    count: 0,
    recordCount: 10
  };

  componentDidMount() {
    this.loadData().then( result => {
      this.setState(({ recordCount }) => ({
        recordCount: parseInt(result.highscore)
      }));
    })
  }

  async loadData() {
    console.log("loading data")
    return fetch('https://baml00sje0.execute-api.ap-southeast-2.amazonaws.com/chicken_prod/chicken_resource_get', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        highscore: `${this.state.count}`
      })
    }).then(results => {
      return results.json()
    }).then( myjson => {
      return myjson
    })
  }

  handleClick = () => {

    console.log(this.state)
    this.setState(({ count }) => ({
      count: count + 1
    }));

    if (this.state.count >= this.state.recordCount) {
      console.log("broke the record!")
      
      this.setState(({ recordCount }) => ({
        recordCount: this.state.count + 1
      }));
      this.render()

      fetch('https://baml00sje0.execute-api.ap-southeast-2.amazonaws.com/chicken_prod/chicken_resource', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        highscore: `${this.state.count + 1}`
      })
      })
    }
  };
  render() {
    return <CoolButton onClick={this.handleClick}>Chicken Pets: {this.state.count} Record: {this.state.recordCount}</CoolButton>;
  }
}

export default Counter;