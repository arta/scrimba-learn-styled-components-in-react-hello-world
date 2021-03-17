import styled from 'styled-components'

const StyledButton = styled.button `
  background: white;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin: .25rem;
  padding: .25rem;
`

const Button = () => {
  return (
    <StyledButton>Click me</StyledButton>
  )
}

export default Button