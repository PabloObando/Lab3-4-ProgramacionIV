import { useContext } from "react";
import WelcomeWidget from "./WelcomeWidget";
import { AuthContext } from '../Context/AuthContext'

export default function Home({email}){

    const { logout } =useContext(AuthuseContext)

    return(
        <> 
        
        <h1>Your at Home</h1>
        <WelcomeWidget email={email}/>
        <button> onClick={logout}logout</button>
        </>
       
    );
}