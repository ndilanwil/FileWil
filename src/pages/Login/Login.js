import "./Login.css"
import {useEffect, useState} from "react"

export const Login = () =>{
    const [isContainerActive, setIsContainerActive] = useState(false);
    const container = document.getElementById('container');
    const signUp = () => {setIsContainerActive(true)}
    const signIn = () => {setIsContainerActive(false)}

    return(
        <div class="log">
            <a class="home" href="./" style={{color: "#4fb9e9"}}> &larr; Home</a>
        <div className={`container${isContainerActive ? " right-panel-active" : ""}`} id="container">
            <div class="form-container sign-up-container">
                <form action="signup" method="post">
                    <h1 style={{color: "#0b2243"}}>Create Account</h1>
                    <br/>
                    <input type="text" name="name" placeholder="Username" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="cpassword" placeholder="Confrim Password"/>
                    <input type="submit" class="button" value="Sign Up"/>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="login" method="post">
                    <h1 style={{color: "#0b2243"}}>Sign in</h1>
                    <br/><br/>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <a href="/login">Forgot your password?</a>
                    <input type="submit" class="button" value="Sign in"/>
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
    <footer>
        <p>
            Techway.school - <a href="/">Description</a> - &#169; copyright | Code of Duty </p>
    </footer>
        </div>
    )
}