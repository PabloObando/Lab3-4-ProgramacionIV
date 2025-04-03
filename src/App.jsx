import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Welcome from './Components/Welcome'
import { AuthContext } from './Context/AuthContext'
import { useContext } from 'react'
import { AuthProvider } from './Context/AuthContext'



function App() {

  const { user } = useContext(AuthContext)

  return (
    <>
      { user 
      ?<Login/>

       :
       <Home />
       }          
    </>
  )
}

export default App
