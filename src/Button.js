import styled from 'styled-components'

const StyledButton = styled.button `
  background: ${({primary}) => primary ? 'red' : 'blue '};
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: .25rem;
  padding: .25rem;
`

const Button = ({primary, text}) => {
  return (
    <StyledButton primary={primary}>{text}</StyledButton>
  )
}

export default Button
