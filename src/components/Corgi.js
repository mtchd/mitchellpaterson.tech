import React from "react";
import styled, { keyframes } from "styled-components";
import corgi from "../images/corgi.gif";

const Corgi = () => <CorgiGif src={corgi} />;

const run = keyframes`
  from {
    right: -15vw;
  }
  to {
    right: 115vw;
  }
`;

const speed = () => {
  if (typeof window !== 'undefined') {
    return (window.innerWidth / window.innerHeight) * 5
  } else {
    return (1096 / 969) * 5
  }
}

/* Set animation duration to be proportional with screen size,
that way we have little corgi at the same speed across devices */
const CorgiGif = styled.img`
  z-index: 99;
  user-select: none;
  pointer-events: none;
  display: inline;
  position: fixed;
  bottom: -4vh;
  height: 20vh;
  animation: ${run} ${speed}s infinite;
  animation-timing-function: linear;
`;

export default Corgi;