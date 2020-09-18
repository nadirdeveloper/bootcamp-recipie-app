import React from 'react'
import './layout.css'
export default function PreFooter() {
    return (
        <div className="main-footer">
            <div className="footer-1">
                <h2>Our Features</h2>
                <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i> Good Food Recipies</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>120 ways to make delicious food</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i> Launched the best food recipie book</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i> Strarting online classes to learn cooking</li>
                </ul>
            </div>
            <div className="footer-2">
                <h2>Our Manager</h2>
                <h4><i className="fa fa-male"></i>Nadir Khan</h4>
            </div>
            <div className="footer-3">
                <h2>Follow Us</h2>
                <div className="footer-3-i">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
               
            </div>
        </div>
    )
}
