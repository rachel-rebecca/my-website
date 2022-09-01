export default function Header(){
    return(
        <div className="header-container">
            <nav className="navbar hidden" id="header_navbar">
                <ul className="header-ul">
                    <li className="header-li" id="nav_home">
                        Home
                    </li>
                    <li className="header-li" id="nav_projects">
                        Projects
                    </li>
                    <li className="header-li" id="nav_experience">
                        Experience
                    </li>
                    <li className="header-li" id="nav_education">
                        Education
                    </li>
                    <li className="header-li" id="nav_links">
                        Links
                    </li>
                    <li className="header-li" id="nav_contact">
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    )
}