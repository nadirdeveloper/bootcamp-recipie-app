import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
function Contact() {
    return (
       <Layout>
           <div className="contact-div">
               <h3>Contact Me</h3>
               <p>You can contact Details By following Information</p>
               <div className="main-contact">
            <div className="footer-1">
                <h2>Address</h2>
                <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i> Karachi, Pakistan</li>
                </ul>
            </div>
            <div className="footer-2">
                <h2>Githib ID</h2>
                <h4><i className="fa fa-male"></i><a href="https://github.com/nadirdeveloper" rel="noreferrer" target="_blank">Nadir Developer</a></h4>
            </div>
            <div className="footer-3">
                <h2>Email Address</h2>
                <div className="footer-3-i">
               <span>nadirali.41006@gmail.com</span>
                </div>
               
            </div>
        </div>
           </div>
       </Layout>
    )
}

export default Contact
