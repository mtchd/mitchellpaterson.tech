import React from 'react'
import Chicken from './Chicken'
import {Post, Description} from '../PostComponents/Post'
import ChickenButton from './ChickenButton'
import Col from '../PostComponents/Col'

const ChickenPost = ({ data }) => {

   const left = (
    <Col>
      <Description>
        This chicken was made entirely in css. Thanks to <a href="https://jamesformica.me/">James Formica</a> for the guidance. See if you can beat the highscore!
        The score is saved using a quick and easy backend with AWS: API Gateway, S3 and Lambda. Click the button to pet the chicken!
      </Description>
    </Col>
   )

   const right = (
    <Col>
      <Chicken/>
      <ChickenButton/>
    </Col>
   )

   return Post({data, left, right})

};

export default ChickenPost;