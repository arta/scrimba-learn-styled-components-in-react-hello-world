import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Section = styled.div `
  background-color: #aac9f0;
  display: flex;
  flex-direction: column;
  color: #f0aeaa;
  border-radius: 15px;
`

const Title = styled.h1 `
  align-self: center;
  color: #aaecf0;
`

const SubTitle = styled(Title)`
  font-size: .875rem;
`

const ParagraphTitle = styled(SubTitle) `
  color: gray;
`

const ReversedTitle = props =>
  <ParagraphTitle {...props} children={props.children.split('').reverse()} />

const Content = () => {
  return (
    <Section>
      <Title>💅 Section</Title>
      <SubTitle>I am a subtitle</SubTitle>
      <Button primary text='Me first' />
      <Button text='Me second' />
      <Icon border='3px solid' readiness='ready' />
      <Icon status='in-progress' />
      <ParagraphTitle as={ReversedTitle}>I am a paragraph title</ParagraphTitle>
    </Section>
  )
}

export default Content

//Mini Challenge
//based on the if else statement for the status, can you add your own if else statement
//that will render the green button like a traffic light, based on a prop we pass
//through? Please get rid of the 'primary' prop that controls the background-color to
//do this.

//Mini Challenge
//Based on the way we added a border to the Primary Icon, can you make the default
//border blue.

//Mini Challenge
// In the same way that we over-rode the style of the Title Component, I would like
// you to do the same for the SubTitle component, and make a ParagraphTitle that
//is grey. Put it at the bottom of the Section.

//Mini Challenge
// In the same way that we added a primary and secondary prop to the two Buttons, can
// you add two circles, or ‘Icons’ below the Buttons, but make them as a functional
//component that we import into the Content Component. I want the primary Icon to
//be Green and the secondary to be Yellow.

//Mini Challenge
// In this mini challenge I would like you to help me out for the next section by
// adding two plain white buttons with the words 'Click me' in each below the word
// Section. Please use the approach we have learnt today.
// We will need this for the next scrim.
