import styled from 'styled-components'

const StyledButton = styled.button `
  background: white;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin: .25rem;
  padding: .25rem;
`

const Button = ({text}) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default Button
