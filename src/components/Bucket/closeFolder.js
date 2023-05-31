export default function closeFolder(){
    let actual = localStorage.getItem("path")
    let result = actual.substring(0, actual.lastIndexOf('/', actual.lastIndexOf('/') - 1) + 1);
    return result
}