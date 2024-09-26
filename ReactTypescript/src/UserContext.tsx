import React from 'react'




interface UserContextType {
    name: string
    message: string
  }

  export const UserContext = React.createContext<UserContextType | undefined>(undefined)