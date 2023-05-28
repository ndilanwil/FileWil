import "./Home.css"
import {Navbar} from "../../components/Navbar/Navbar"

export const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            <br/>
            <div class="buttons">
                <button class="HomeButton">Create Folder</button>
                <button >Upload File</button>
            </div>
            <br/>
            <center>
                <div class="FilesBox">

                </div>
            </center>
        </div>
    )
}