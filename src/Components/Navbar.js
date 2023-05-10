import "../style.css"

const Navbar = () =>{
    return(
        <nav className="nav">
            <h2>The Dojo blog</h2>
            <div className="link">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Profile</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar