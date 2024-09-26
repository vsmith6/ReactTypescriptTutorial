import React, { useContext} from 'react'
import {UserContext} from './UserContext'



const Message: React.FC= () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('User context must be used')
  }

  
    return (
      <p>{context.name}, {context.message}</p>  
    )
}

export default Message
