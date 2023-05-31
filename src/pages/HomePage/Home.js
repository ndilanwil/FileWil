import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"
import folder from "../../images/folder.png"
import upload from "../../images/upload.png"
import { useState } from "react"
import createFolder from "../../components/Bucket/createFolder"
import { useNavigate } from "react-router-dom";
import ViewFiles from "../../components/Bucket/viewFiles"
import ViewFolders from "../../components/Bucket/viewFolders"


export const Home = () => {
    console.log(ViewFiles("test/"))
    console.log(ViewFolders("test/"))
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [fold, setFolder] = useState('')
    const toggleOverlay = () => {
        setShow(!show);
    };
    const createF = () => {
        setShow(true)
        createFolder("test/",fold)
        setShow(false)
    }
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
                    <form onSubmit={createF}>
                        <input type="test" onChange={e => setFolder(e.target.value)} name="folder" required/>
                        <div class="but">
                            <button onClick={toggleOverlay} class="fbutton" style={{color: "black", backgroundColor: "white"}}>Cancel</button>
                            <button type="submit" class="fbutton" onClick={createF}>Create</button>
                        </div>
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