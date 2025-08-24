import ProfilePic from "../assets/profilepic.jpg";

export default function Homepage(){
    return(
        <div aria-label="container" className="homepage-container">
            {/* <Header/> */}
            <main id="homepage_main">
                <div id="hompage_img_h1">
                <img src={ProfilePic} alt="Portrait of Rachel smiling in front of a bridge wearing a white shirt and hair down" id="homepage_profilepic"/>
                <div id="homepage_h1_p">
                <h1 className="homepage-h1">Rachel Maki</h1>
                <p id="homepage_jobtitle">Web Developer</p>
                </div>
                </div>
            <h2 className="homepage-h2">About me</h2>
            <p className="homepage-p" id="homepage_aboutme_p">I began teaching myself coding skills like HTML, CSS, and Javascript through online courses in January 2021 when I decided to change careers. A couple of months later, I was accepted to the coding bootcamp at Grand Circus where I applied to and received a full-ride scholarship through the National Center for Women & Information Technology (NCWIT). After I completed bootcamp, I was scouted by Verint and employed there for eight months as an Implementation Engineer where I used JavaScript, CSS, HTML, and other web development tools daily. I am currently working at Intrepid Control Systems as a Junior Software Engineer and utilize my background with art and programming while working on the UX/UI for our data logging devices.</p>
            </main>
        </div>
    )
}