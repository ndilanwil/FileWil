import "./Files.css"
import file from "../../images/file.png"
import del from "../../images/delete.png"

const Files = (props) => {
    return(
        <div class="Folder">
            <div class="flexFolder">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={file} alt="folder" width="30" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label style={{color: "black", fontSize: "20px"}}>{props.name}</label>
            </div>
            <button class="delete">
                    <img src={del} alt="delete" width="20" height="20" />
            </button>
        </div>
    )
}

export default Files;