import styled from 'styled-components'
import Button from './Button'

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

const Content = () => {
  return (
    <Section>
      <Title>💅 Section</Title>
      <Button text='Me first' />
      <Button text='Me second' />
    </Section>
  )
}

export default Content

//Mini Challenge
// In this mini challenge I would like you to help me out for the next section by
// adding two plain white buttons with the words 'Click me' in each below the word
// Section. Please use the approach we have learnt today.
// We will need this for the next scrim.
