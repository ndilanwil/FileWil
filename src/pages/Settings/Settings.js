import "./Settings.css"
import user from "../../images/user.png"
import { useState } from "react"
import Update from "../../components/Authentifications/update"
import Alert from '@mui/material/Alert';

export const Settings = () => {
    const em = localStorage.getItem("email")
    const us = localStorage.getItem("username")
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [alert, setAlert] = useState(false)
    const [password, setPasswor] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        setAlert(true)
      }
    return(
            <div class="wrapper bg-white mt-sm-5">
                {alert &&
                <Alert variant="filled" severity="info">
                    This feature is not yet avaible, We will notify you as soon as the app is 100% functional
                </Alert>
            }
        <h4 class="pb-4 border-bottom" style={{color: "#0b2243"}}>Account settings</h4>
        <div class="d-flex align-items-start py-3 border-bottom">
            <img src={user}
                class="img" alt=""/>
            <div class="pl-sm-4 pl-2" id="img-section">
                <b style={{color: "#0b2243"}}>Profile Photo</b>
                <p>Accepted file type .png. Less than 1MB</p>
                <button class="btn button border"><b style={{color: "#0b2243"}}>Upload</b></button>
            </div>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="firstname">Username</label>
                    <input type="text" class="bg-light form-control" placeholder={us} />
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                <   label for="email">Email Address</label>
                    <input type="email" class="bg-light form-control" placeholder={em} />
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="password">Old Password</label>
                    <input type="password" class="bg-light form-control" placeholder="Leave empty = not modify" />
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="password">New Password</label>
                    <input type="password" class="bg-light form-control" placeholder="Leave empty = not modify" />
                </div>
            </div>
            <div class="py-3 pb-4 border-bottom">
                <button onClick={handleClick} class="btn btn-primary mr-3">Save Changes</button>
                <a href="/home" class="btn border button">Cancel</a>
            </div>
            <div class="d-sm-flex align-items-center pt-3" id="deactivate">
                <div>
                    <b style={{color: "#0b2243"}}>Deactivate your account</b>
                    <p>This will completely remove your account from File.Wil</p>
                </div>
                <div class="ml-auto">
                    <button onClick={handleClick} class="btn danger">Deactivate</button>
                </div>
            </div>
        </div>
    </div>
    )
}