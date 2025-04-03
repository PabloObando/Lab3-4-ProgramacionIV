
export default function WelcomeWidget(){

    const { user } = useContext(AuthContext)
    

    return(
        <h2>Welcome to our site (email)</h2>
    )
}