import "./Login.css"
import {useState} from "react"
import register from "../../components/Authentifications/registration"
import Log from "../../components/Authentifications/login"
import createUserFolder from "../../components/Bucket/createUserFolder"
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [cpassword, setcPassword] = useState('')
    const [isContainerActive, setIsContainerActive] = useState(false);
    const signUp = () => {setIsContainerActive(true)}
    const signIn = () => {setIsContainerActive(false)}
    const Valid = async () => {
        if(cpassword === password){
            register(username,email,password)
            createUserFolder(username)
            navigate("/home")
        }
        else{
            window.alert("Passwords must be the same");
        }
    }
    const user = Log(username,password) 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user===true){
            navigate("/home")
        }
      }
    return(
        <div class="log">
            <a class="home" href="./" style={{color: "#4fb9e9"}}> &larr; Home</a>
        <div className={`container${isContainerActive ? " right-panel-active" : ""}`} id="container">
            <div class="form-container sign-up-container">
                <form onSubmit={Valid}>
                    <h1 style={{color: "#0b2243"}}>Create Account</h1>
                    <br/>
                    <input type="text" name="username" onChange={e => setUserName(e.target.value)} placeholder="Username" required/>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required/>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
                    <input type="password" name="cpassword" onChange={e => setcPassword(e.target.value)} placeholder="Confrim Password" required/>
                    <button class="button" type="submit" onClick={Valid}>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form onSubmit={handleSubmit} >
                    <h1 style={{color: "#0b2243"}}>Sign in</h1>
                    <br/><br/>
                    <input type="text" name="username" onChange={e => setUserName(e.target.value)} placeholder="Username" required/>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
                    <a href="/login">Forgot your password?</a>
                    <button class="button" type="submit">Sign in</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn" onClick={signIn}> Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        
                        <p>You don't have an account ?<br/>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp" onClick={signUp}>Sign Up</button>
                    </div>
                </div>
            </div>
    </div>
    <footer class="LoginFooter">
        <p>
            Techway.school - <a href="/">Description</a> - &#169; copyright | Code of Duty </p>
    </footer>
        </div>
    )
}