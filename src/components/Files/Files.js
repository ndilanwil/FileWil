import "./Files.css"
import file from "../../images/file.png"
import del from "../../images/delete.png"
import openFile from "../Bucket/openFile"

const Files = (props) => {
    let path = localStorage.getItem("path")
    const handleClick = (e) => {
        e.preventDefault();
        openFile(path, props.name)
      }
    return(
        <div class="Folder">
            <div class="flexFolder">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={file} alt="folder" width="30" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label onClick={handleClick} style={{color: "black", fontSize: "20px"}}>{props.name}</label>
            </div>
            <button class="delete">
                    <img src={del} alt="delete" width="20" height="20" />
            </button>
        </div>
    )
}

export default Files;