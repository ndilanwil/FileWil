import "./Login.css"
import {useState} from "react"
import register from "../../components/Authentifications/registration"
import Log from "../../components/Authentifications/login"
import Check from "../../components/Authentifications/Check"
import createUserFolder from "../../components/Bucket/createUserFolder"
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
 
export const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [cpassword, setcPassword] = useState('')
    const [alert, setAlert] = useState(false)
    const [alert1, setAlert1] = useState(false)
    const [alert2, setAlert2] = useState(false)
    const [isContainerActive, setIsContainerActive] = useState(false);
    const signUp = () => {setIsContainerActive(true)}
    const signIn = () => {setIsContainerActive(false)}
    let test = Check(username,email)
    const Valid = async () => {
        if(cpassword === password){
            if(test==true){
                setAlert2(true)
            }
            else{
                register(username,email,password)
                createUserFolder(username)
                localStorage.setItem("path", username+"/")
                localStorage.setItem("email", email)
                localStorage.setItem("username", username)
                localStorage.setItem("password", password)
                console.log(localStorage.getItem("path"))
                navigate("/home")
            }
        }
        else{
            setAlert1(true)
        }
    }
    const user = Log(username,password) 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user===true){
            localStorage.setItem("path", username+"/")
            localStorage.setItem("email", email)
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            navigate("/home")
        }
        else{
            setAlert(true)
        }
      }
    return(
        <div class="log">
            {alert &&
                <Alert variant="filled" severity="error">
                    Wrong Username or password. Please check your inputs
                </Alert>
            }
            {alert1 &&
                <Alert variant="filled" severity="warning">
                    Passwords must be the same. Re-verify
                </Alert>
            }
            {alert2 &&
                <Alert variant="filled" severity="error">
                    Sorry username or email is already used
                </Alert>
            }
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