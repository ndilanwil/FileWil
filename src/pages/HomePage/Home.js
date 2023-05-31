import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"
import folder from "../../images/folder.png"
import upload from "../../images/upload.png"
import { useState, useRef } from "react"
import createFolder from "../../components/Bucket/createFolder"
import uploadFile from "../../components/Bucket/uploadFile"
import { useNavigate } from "react-router-dom";
import ViewFiles from "../../components/Bucket/viewFiles"
import ViewFolders from "../../components/Bucket/viewFolders"
import Folders from "../../components/Folders/Folders"
import Files from "../../components/Files/Files"
import Back from "../../components/Folders/Back"

export const Home = () => {
    let path = localStorage.getItem("path")
    const [show, setShow] = useState(false)
    const [fold, setFolder] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();

    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
        let body = event.target.files[0]
        let name = event.target.files[0].name
        uploadFile(path,body,name)
    };
    const toggleOverlay = () => {
        setShow(!show);
    };
    const createF = () => {
        setShow(true)
        createFolder(path,fold)
        setShow(false)
    }
      const handleClick = () => {
        fileInputRef.current.click();
      };
    let fo = ViewFolders(path)
    let fi = ViewFiles(path)
    return(
        <div className="Home">
            <Navbar />
            <br/>
            <div class="buttons">
                <button onClick={toggleOverlay} class="HomeButton"><img src={folder} alt="folder" width="20" style={{marginRight: "10px"}}/>Create Folder</button>
                <button onClick={handleClick} class="HomeButton" ><img src={upload} alt="upload" width="20" style={{marginRight: "10px"}}/>Upload File</button>
                <input type="file"ref={fileInputRef}style={{ display: "none" }}onChange={handleFileInput}/>
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
                    {
                        (path.split("/").length - 1 != 1) && 
                            <Back />
                    }
                </div>
            </center>
        </div>
    )
}