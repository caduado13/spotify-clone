import React from 'react'

const Header = ({children, marginTop}) => {
  return (<div className= {marginTop + ""}>
    {children}
  </div>
  )
}

export default Header
