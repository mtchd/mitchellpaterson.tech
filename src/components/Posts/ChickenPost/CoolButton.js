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
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));

    if (this.state.count > this.state.recordCount) {
      console.log("broke the record!")
    }
  };
  render() {
    return <CoolButton onClick={this.handleClick}>Chicken Pets: {this.state.count}</CoolButton>;
  }
}

export default Counter;