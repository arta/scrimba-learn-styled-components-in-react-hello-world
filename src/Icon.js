import styled from 'styled-components'

const StyledIcon = styled.div `
  background: ${({primary}) => primary ? 'green' : 'yellow'};
  border-radius: 100%;
  margin: .5rem;
  height: 2rem; width: 2rem;
`

const Icon = ({primary}) => {
  return (
    <StyledIcon primary={primary} />
  )
}

export default Icon
