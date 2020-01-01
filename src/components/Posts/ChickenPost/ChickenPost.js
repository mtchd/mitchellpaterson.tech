import React from 'react'
import Chicken from '../../Chicken'
import {Post, Col, Description} from '../../Post'
import CoolButton from './CoolButton'

const ChickenPost = ({ data }) => {

   const left = (
    <Col>
      <Description>
        This chicken was made entirely in css. Thanks to <a href="https://jamesformica.me/">James Formica</a> for the guidance. See if you can beat the highscore!
        The score is saved using a quick and easy backend with AWS: API Gateway, S3 and Lambda.
      </Description>
    </Col>
   )

   const right = (
    <Col>
      <Chicken/>
      <CoolButton/>
    </Col>
   )

   return Post({data, left, right})

};

export default ChickenPost;