import "./Welcome.css"
import logo from "../../images/logo.png"
import banner from "../../images/banner.png"
import team from "../../images/team.png"
import usage from "../../images/coming.png"

export const Welcome = () => {
    return(
    <div>
        <header>
            <a href="/">
                <img src={logo} width="200px" alt="File.Wil"/>
            </a>
            <nav>
                <ul>
                    <li> <a href="#home"> Home </a> </li>
                    <li> <a href="#description"> Description </a> </li>
                    <li> <a href="#demo"> Demo </a> </li>
                    <li> <a href="#about"> About Me </a> </li>
                    <li> <a class="login" href="/login">LogIn</a></li>
                </ul>
            </nav>
        </header>
        <section id="home" class="banner">
            <div class="banner-text">
                <h1>Welcome to <br/> <span>File</span>.Wil</h1>
                <p>A web-based solution for storing files and creating folders to store your files in the cloud.
                    <br/><br/>
                    A website that allows you to store, create and open your files as if you were on your local PC.
                </p>
                <a href="./login">
                    <button>Try Now</button>
                </a>
            </div>
            <img width="45%" src={banner} alt="banner" />
        </section>
        <section id="description" class="description">
            <div class="head">
                <h2>Description</h2>
                <span>Here is a rundown of the platforms mechanism.</span>
                <hr/>
            </div>
            <div class="students content">
                <img src={usage} width="50%" alt="users"/>
                <div class="desp-text">
                    <h2>Users can <hr/> </h2>
                    <ol>
                        <li>Sign In</li>
                        <li>Create a folder.</li>
                        <li>Upload a file.</li>
                        <li>He can also view his folders and files.</li>
                        <li>Download a File to his local storage </li>
                        <li>Update his account(Username and password)</li>
                        <li>Sign out</li>
                        <li>Delete his account</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="demo" class="demo">
            <div class="head">
                <h2>Demo</h2>
                <span>Have a look at how the platform works.</span>
                <hr/>
            </div>
            <div class="video">
                <img width="100%" src="./image/demo.png" alt="" />
            </div>
        </section>
        <section id="about" class="about">
            <div class="head">
                <h2>About Me</h2>
                <hr/>
            </div>
            <div class="about-body">
                <div class="about-text">
                    <h2>I am <a href="https://www.linkedin.com/in/nuadje-todjo-dilan-wilfred-80b50b220" >Nuadje Dilan</a></h2>
                    <p>A Young Junior developer following a Full Stack engineering course at QWASAR Silicon Valley and a Computer Science course at JFN - HIGHTECH UNIVERSITY INSTITUTE </p>
                </div>
                <img src={team} width="60%" alt="" />
            </div>
            </section>
            <footer>
                <p>FileWil - <a href="/">Description</a> - &#169; copyright | ndilanwil </p>
            </footer>
        </div>
    );
}
