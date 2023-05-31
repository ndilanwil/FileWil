import "./Folders.css"
import closeFolder from "../Bucket/closeFolder"

const Files = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        closeFolder()
      }
    return(
        <div class="Folder">
            <div class="flexFolder">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label onClick={handleClick} style={{color: "black", fontSize: "20px"}}>../</label>
            </div>
        </div>
    )
}

export default Files;