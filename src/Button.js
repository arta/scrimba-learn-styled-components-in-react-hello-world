import styled from 'styled-components'

// polymorphic prop, not used now
const ReversedText = props =>
  <StyledButton {...props} children={props.children.split('').reverse()} />

const StyledButton = styled.button `
  background: ${({primary}) => primary ? 'red' : 'blue '};
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: .25rem;
  padding: .25rem;
  &:hover {
    background: teal;
  }
  .subtext {
    font-size: .75rem;
  }
`

const Button = ({primary, text}) => {
  return (
    <StyledButton primary={primary}>
      {text}
      <p className='subtext'>Sub text</p>
    </StyledButton>
    // <StyledButton as={ReversedText} primary={primary}>{text}</StyledButton>
  )
}

export default Button
