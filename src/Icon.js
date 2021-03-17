import styled from 'styled-components'

const StyledIcon = styled.div `
  background: ${({readiness}) => {
    if (readiness === 'ready') return 'yellow'
    else if (readiness === 'steady') return 'orange'
    else if (readiness === 'go') return 'green'
    else return 'red'
  }};
  border: ${({border}) => border || '3px solid blue'};
  border-radius: 100%;
  margin: .5rem;
  margin-left: ${({status}) => {
    if (status === 'in-progress') return '4.375rem'
    else if (status === 'done' ) return '8.75rem'
  }};
  height: 2rem; width: 2rem;
`

const Icon = ({border, primary, readiness, status}) => {
  return (
    <StyledIcon border={border} primary={primary} readiness={readiness} status={status} />
  )
}

export default Icon
