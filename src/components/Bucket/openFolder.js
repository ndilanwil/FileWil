export default function openFolder(folder){
    let actual = localStorage.getItem("path")
    localStorage.setItem("path", actual + folder)
}