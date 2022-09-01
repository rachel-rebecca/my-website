import ProfilePic from "../assets/profilepic.jpg"

export default function Homepage(){
    return(
        <div aria-role="container" className="homepage-container">
            <main id="homepage_main">
                <div id="hompage_img_h1">
                <img src={ProfilePic} alt="Portrait of Rachel smiling in front of a bridge wearing a white shirt and hair down" id="homepage_profilepic"/>
                <div id="homepage_h1_p">
                <h1 className="homepage-h1">Rachel Maki</h1>
                <p id="homepage_jobtitle">Web Developer</p>
                </div>
                </div>
            <h2 className="homepage-h2">About me</h2>
            <p className="homepage-p" id="homepage_aboutme_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </main>
        </div>
    )
}