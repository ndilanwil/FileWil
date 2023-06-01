import "./Navbar.css"
import logo from "../../images/logo.png"
import search from "../../images/search.png"
import bell from "../../images/bell.png"
import user from "../../images/user.png"
import SignOut from "../../components/Authentifications/signOut"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        SignOut()
        navigate("/login")
      }
    return (
        <header class="HeaderHome">
            <a href="/home">
                <img src={logo} width="150px" alt="File.Wil"/>
            </a>
            <input class="search" type="text"/>
            <img src={search} width="20px" alt="search" />
            <nav>
                <ul>
                    <li></li>
                    <li> <a href="/settings"> User Settings </a> </li>
                    <li><img src={bell} width="20px" alt="bell" /></li>
                    <li> <button class="login" onClick={handleClick}>SignOut</button></li>
                    <li><img src={user} width="20px" alt="user" /></li>
                </ul>
            </nav>
        </header>
    )
}
