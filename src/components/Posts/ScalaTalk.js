import React from 'react'
import TechList from '../List'
import llamaGif from '../../images/fab_llama.gif'
import {Post, Col, Description, ImgContainer} from '../Post'

const ScalaTalk = ({ data }) => {

  const technologyList = [
    "Classes in Scala (in comparison to Java)",
    "Case Classes and why they exist",
    "Companion/Singleton Objects",
    "Traits",
    "Pattern matching using the above",
  ]

   const left = (
    <Col>
      <Description>
        I gave a talk running over some of the basics of Scala, feel free to check out the <a href="https://mtchd.github.io/scala-talk/#/">slides</a>, and their <a href="https://github.com/mtchd/scala-talk">source code</a>.
        You can view the recording <a href="https://web.microsoftstream.com/video/8b164dff-83e5-4390-a218-ab0b9f30a0ad">here</a>.
        The talk runs over:
      </Description>
      <TechList listItems={technologyList}/>
    </Col>
   )

   const right = (
    <Col>
      <ImgContainer >
        <img src={llamaGif} alt="Fabulous Llama" />
      </ImgContainer>
    </Col>
   )

   return Post({data, left, right})

};

export default ScalaTalk;