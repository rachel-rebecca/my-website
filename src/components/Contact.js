import Email from "../assets/email-envelope.svg"
import NewWindow from "../assets/new-window.svg"
import Copy from "../assets/copy-clipboard.svg"
import Form from "../subcomponents/Form"

export default function Contact () {
    return(
        <div aria-label="contact container" id="contact_container">
            <div id="contact_info" className="container">
            <h1 id="contact_h1">Contact me directly!</h1>
            <ul id="contact_ul" >
                <li className="contact-li" id="contact_email">Email: <a id="contact_email_a" href="mailto:rachel.r.maki@gmail.com" aria-label="Send an email to Rachel in a new window.">rachel.r.maki@gmail.com <img id="contact_email_img" alt="email envelope icon" src={Email}/></a></li>
                <li className="contact-li" id="contact_phone" onClick={() => {navigator.clipboard.writeText("(586) 913-3727").then(function() {
                console.log('Async: Copying to clipboard was successful!');
                document.querySelector("#contact_copied").innerHTML = "This phone number has been copied to your clipboard.";
                document.querySelector("#contact_copied").classList.remove("fade-out");
                document.querySelector("#contact_copied").classList.add("fade-in");
                setTimeout(() => {
                    document.querySelector("#contact_copied").classList.remove("fade-in");
                    document.querySelector("#contact_copied").classList.add("fade-out");
                }, "4000")
                setTimeout(() => {
                document.querySelector("#contact_copied").innerHTML = "";
                 }, "7000")
                }, function(err) {
                console.error('Async: Could not copy text: ', err);
                document.querySelector("#contact_copied").innerHTML = ""
                });}}>Phone: <p className="contact-p" id="contact_number">(586) 913-3727</p> <img id="contact_copy_img" alt="copy to clipboard icon" src={Copy}/><p className="contact-p" id="contact_copied"></p></li>
            </ul>
            </div>
            <Form/>
        </div>
    )
}