import styled from 'styled-components'

const StyledIcon = styled.div `
  background: ${({primary}) => primary ? 'green' : 'yellow'};
  border: ${({ border }) => border || '3px solid blue'};
  border-radius: 100%;
  margin: .5rem;
  margin-left: ${({status}) => {
    if (status === 'in-progress') return '4.375rem'
    else if (status === 'done' ) return '8.75rem'
  }};
  height: 2rem; width: 2rem;
`

const Icon = ({border, primary, status}) => {
  return (
    <StyledIcon border={border} primary={primary} status={status} />
  )
}

export default Icon
