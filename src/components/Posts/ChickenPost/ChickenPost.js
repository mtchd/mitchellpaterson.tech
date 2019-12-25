import React from 'react'
import Chicken from '../../Chicken'
import {Post, Col, Description} from '../../Post'
import CoolButton from './CoolButton'

const ChickenPost = ({ data }) => {

   const left = (
    <Col>
      <Description>
        This chicken was made entirely in css. Oooo. Thanks to James Formica for the guidance. You may pet the chicken...
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