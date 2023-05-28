import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"
import folder from "../../images/folder.png"
import upload from "../../images/upload.png"

export const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            <br/>
            <div class="buttons">
                <button class="HomeButton"><img src={folder} alt="folder" width="20" style={{marginRight: "10px"}}/>Create Folder</button>
                <button class="HomeButton" ><img src={upload} alt="upload" width="20" style={{marginRight: "10px"}}/>Upload File</button>
            </div>
            <br/>
            <center>
                <div class="FilesBox">

                </div>
            </center>
        </div>
    )
}