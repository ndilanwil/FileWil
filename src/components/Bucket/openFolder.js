export default function openFolder(folder){
    let actual = localStorage.get("path")
    localStorage.setItem("path", actual + folder)
    console.log("path = " = localStorage.get("path"))
}