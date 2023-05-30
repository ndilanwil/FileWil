import "./Navbar.css"
import logo from "../../images/logo.png"
import search from "../../images/search.png"
import bell from "../../images/bell.png"
import user from "../../images/user.png"

export const Navbar = () => {
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
                    <li> <a class="login" href="/login">SignOut</a></li>
                    <li><img src={user} width="20px" alt="user" /></li>
                </ul>
            </nav>
        </header>
    )
}
