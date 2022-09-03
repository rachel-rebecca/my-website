export default function Education () {
    return(
        <div className="container" id="education-container">
            <h1 id="education_h1">Education</h1>
            <dl id="education_list">
                <dt>Grand Circus Bootcamp</dt>
                <dd >
                    <p className="education-p">Certificate: November 2021</p>
                    <p className="education-p">"Full-stack Developer Course"</p>
                    <p className="education-p" style={{textAlign: "left"}}>
                    Some of the frontend technologies we learned were Javascript, CSS, and HTML. A few of the backend technologies were SQL, MongoDB, and Express. I was a "culture captain" for our class where I planned study groups, face-to-face meetups, and sent cards/gifts to everyone for birthdays, mid-terms, and graduation.
                    </p>
                </dd>
                <dt>University of Michigan - Dearborn</dt>
                <dd >
                    <p className="education-p">Bachelor's Degree: December 2019</p>
                    <p className="education-p" >Major: Psychology</p>
                    <p className="education-p">Minor: Applied Art</p>
                    <p className="education-p" style={{textAlign: "left"}}>During my time in school, I was involved in several clubs on campus. Some of those were our Art and Literature Journal, Amnesty International, and Phi Sigma Sigma. During my senior year, I worked with my statistics Professor outside of class on a research poster for "Meeting of the Minds".</p>
                </dd>
            </dl>
        </div>
    )
}