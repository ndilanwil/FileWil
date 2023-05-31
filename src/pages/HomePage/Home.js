import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"
import folder from "../../images/folder.png"
import upload from "../../images/upload.png"
import { useState } from "react"
import createFolder from "../../components/Bucket/createFolder"
import { useNavigate } from "react-router-dom";
import ViewFiles from "../../components/Bucket/viewFiles"
import ViewFolders from "../../components/Bucket/viewFolders"
import Folders from "../../components/Folders/Folders"
import Files from "../../components/Files/Files"

export const Home = () => {
    let path = localStorage.getItem("path")
    const [show, setShow] = useState(false)
    const [fold, setFolder] = useState('')
    const toggleOverlay = () => {
        setShow(!show);
    };
    const createF = () => {
        setShow(true)
        createFolder(path,fold)
        setShow(false)
    }
    let fo = ViewFolders(path)
    let fi = ViewFiles(path)
    return(
        <div className="Home">
            <Navbar />
            <br/>
            <div class="buttons">
                <button onClick={toggleOverlay} class="HomeButton"><img src={folder} alt="folder" width="20" style={{marginRight: "10px"}}/>Create Folder</button>
                <button class="HomeButton" ><img src={upload} alt="upload" width="20" style={{marginRight: "10px"}}/>Upload File</button>
            </div>
            {show && 
                <center>
                <div class="fold">
                <center>
                <div class="createFolder">
                    <br/>
                    <h4 style={{color: "black"}}> Create Folder</h4>
                    <span>Enter the name of folder to create</span>
                    <form onSubmit={createF}>
                        <input type="test" onChange={e => setFolder(e.target.value)} name="folder" required/>
                        <div class="but">
                            <button onClick={toggleOverlay} class="button" style={{color: "black", backgroundColor: "white"}}>Cancel</button>
                            <button type="submit" class="button" onClick={createF}>Create</button>
                        </div>
                    </form>
                </div>
                </center>
                </div>
                </center>
            }
            <br/>
            <center>
                <div class="FilesBox">
                    { 
                        fo.map((folder, index) => {
                            return <Folders name={folder} number={index} />
                        })
                    }
                    { 
                        fi.map((folder, index) => {
                            return <Files name={folder}/>
                        })
                    }
                </div>
            </center>
        </div>
    )
}