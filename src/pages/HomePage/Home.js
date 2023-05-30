import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"
import folder from "../../images/folder.png"
import upload from "../../images/upload.png"
import { useState } from "react"

export const Home = () => {
    const [show, setShow] = useState(false)
    const toggleOverlay = () => {
        setShow(!show);
    };
    return(
        <div className="Home">
            <Navbar />
            <br/>
            <div class="buttons">
                <button onClick={toggleOverlay} class="HomeButton"><img src={folder} alt="folder" width="20" style={{marginRight: "10px"}}/>Create Folder</button>
                <button class="HomeButton" ><img src={upload} alt="upload" width="20" style={{marginRight: "10px"}}/>Upload File</button>
            </div>
            {show && 
                <div class="fold">
                <center>
                <div class="createFolder">
                    <br/>
                    <h4 style={{color: "black"}}> Create Folder</h4>
                    <span>Enter the name of folder to create</span>
                    <form>
                        <input type="test" name="folder" />
                        <button type="submit" class="fbutton">Create</button>
                    </form>
                </div>
                </center>
                </div>
            }
            <br/>
            <center>
                <div class="FilesBox">

                </div>
            </center>
        </div>
    )
}