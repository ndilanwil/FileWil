import "./Folders.css"
import folder from "../../images/folders.png"
import del from "../../images/delete.png"


const Folders = (props) => {
    if(props.number===0){
        return(
            <div class="Folder1">
                <div class="flexFolder">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={folder} alt="folder" width="30" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label style={{color: "black", fontSize: "20px"}}>{props.name}</label>
                </div>
                <button class="delete1">
                        <img src={del} alt="delete" width="20" height="20" />
                </button>
            </div>
        )
    }
    else{
        return(
            <div class="Folder">
                <div class="flexFolder">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={folder} alt="folder" width="30" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label style={{color: "black", fontSize: "20px"}}>{props.name}</label>
                </div>
                <button class="delete">
                        <img src={del} alt="delete" width="20" height="20" />
                </button>
            </div>
        )
    }
}

export default Folders;