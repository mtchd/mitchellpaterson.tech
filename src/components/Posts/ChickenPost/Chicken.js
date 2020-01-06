import React from 'react'
import styled, { keyframes } from 'styled-components'

const Flap = keyframes`
  0%,
  100% {
    transform: rotateY(0) rotateZ(0);
  }
  50% {
    transform: rotateY(-40deg) rotateZ(-10deg)
  }
`

const Blink = keyframes`
  0%,
  48%,
  52%,
  100% {
    height: 10px;
  }
  50% {
    height: 1px;
  }
`

const ChickenContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 100px;
  transform: translate(-50%, -50%);
  margin-bottom: 1rem;
`

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  background: bisque;
`

const BodyAndWing = styled(Body)`
&::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  width: 20%;
  height: 40%;
  border-bottom-right-radius: 1000px;
  border-top: 1px solid darkslategrey;
  border-bottom: 1px solid darkslategrey;
  animation: ${Flap} 1s infinite ease-out;
  transform-origin: 0 0;
}`

const Head = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  width: 50px;
  height: 50px;
  background: bisque;
  border-top-right-radius: 23123px;
`

const HeadAndEye = styled(Head)`
&::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  transform: translate(-50%, -50%);
  animation: ${Blink} 5s infinite;
}`

const Hair = styled.div`
  position: absolute;
  top: -5px;
  left: -1px;
  width: 5px;
  height: 10px;
  background: darkorange;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: (rotate(-10deg));
`

const Tail = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  background: bisque;
  border-top-left-radius: 123123px;
`

const Leg = styled.div`
  position: absolute;
  bottom: -18px;
  width: 2px;
  height: 20px;
  background: darkorange;
`

const LegAndFoot = styled(Leg)`
&::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -5px;
  width: 5px;
  height: 2px;
  background: darkorange;
}`

const LegOne = styled(LegAndFoot)`
  left: 40%;
`

const LegTwo = styled(LegAndFoot)`
  left: 60%;
`

const Beak = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: darkorange;
`

const Chicken = () => {
  return (
    <ChickenContainer>
      <HeadAndEye>
        <Hair />
      </HeadAndEye>
      <Beak />
      <BodyAndWing />
      <Tail />
      <LegOne />
      <LegTwo />
    </ChickenContainer>
  );
};

export default Chicken;