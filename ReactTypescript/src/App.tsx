import React, {useState, useEffect} from 'react'
import './App.css'
import Message from './Message'
import {UserContext} from './UserContext'


// this component structure is what is compatible with typescript
const App: React.FC = () => {
   const [userName, setUserName] = useState<string>('User')
   const [userMessage, setUserMessage] = useState<string>('This is the initial message')

   // when the component runs, run this effect
   useEffect(() => {
    const timer = setTimeout(()=> {
      //update the state after 5 seconds
      setUserName('Midnight')
      setUserMessage('This is now Midnights message with Typescript')

    }, 5000)
    return() => clearTimeout(timer)
   }, [])

  return (
    <UserContext.Provider value={{name: userName, message: userMessage}}>
      <h1>Typescript is cool</h1>
      <Message  />
    </UserContext.Provider>
  );
}

export default App
