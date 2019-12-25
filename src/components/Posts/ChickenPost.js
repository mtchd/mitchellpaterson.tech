import React from 'react'
import Chicken from '../Chicken'
import {Post, Col, Description} from '../Post'

const ChickenPost = ({ data }) => {

   const left = (
    <Col>
      <Description>
        This chicken was made entirely in css. Oooo. Thanks to James Formica for the guidance.
      </Description>
    </Col>
   )

   const right = (
    <Col>
      <Chicken/>
    </Col>
   )

   return Post({data, left, right})

};

export default ChickenPost;