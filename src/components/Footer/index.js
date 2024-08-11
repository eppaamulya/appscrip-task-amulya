import './index.css'
import image from '../../assets/United States of America (US).png'
import insta from '../../assets/Insta.png';
import linkedin from '../../assets/a.png';
import gpay from '../../assets/Group 136188.png'
import mastercard from '../../assets/Group 136190.png'
import paypal from '../../assets/Group 136192.png'
import amex from '../../assets/Group 136193.png'
import apay from '../../assets/Group 136194.png'
import pay from '../../assets/Group 136195.png'

const Footer = () => {
    return(
        <footer className='footer-container'>
            <div className='footer-top-1'>
                <div className='foot-top-div-1'>
                    <h1 className='foot-head-1'>BE THE FIRST TO KNOW</h1>
                    <p className='foot-para-1'>Sign up for updates from mett&#257; muse.</p>
                    <div className='foot-1'>
                        <input type="text" className='input' placeholder='Enter your e-mail...' />
                        <button className='sub-button'>SUBSCRIBE</button>
                    </div>
                    
                </div>
                <div className='foot-top-div-2'>
                    <h2 className='foot-head-1'>CONTACT US</h2>
                    <p className='foot-para-1'>+44 221 133 5360</p>
                    <p className='foot-para-1'>customercare@mett&#257;muse.com</p>
                    <h2 className='foot-head-1'>CURRENCY</h2>
                    <div className='foot-2'>
                        <img src={image} alt="Country Pic"/>
                        <p className='foot-para-2'><span className='span-star'>&#9670;</span>USD</p>
                    </div>
                    <p className='foot-para-3'>Transactions will be completed ni Euros and a currency reference is available on hover.</p>  
                    
                </div>
            </div>
            <hr className='line'/>
            <div className='footer-top-2'>
                <div>
                    <h2 className='foot-head-1'>mett&#257; muse</h2>
                    <p className='foot-para-1'>About us</p>
                    <p className='foot-para-1'>Stories</p>
                    <p className='foot-para-1'>Artisans</p>
                    <p className='foot-para-1'>Boutiques</p>
                    <p className='foot-para-1'>Contact Us</p>
                    <p className='foot-para-1'>EU Compliances Docs</p>
                </div>
                <div>
                    <h2 className='foot-head-1'>QUICK LINKS</h2>
                    <p className='foot-para-1'>Orders & Shipping</p>
                    <p className='foot-para-1'>Join/Login as a Seller</p>
                    <p className='foot-para-1'>Payment & Pricing</p>
                    <p className='foot-para-1'>Return & Refunds</p>
                    <p className='foot-para-1'>FAQs</p>
                    <p className='foot-para-1'>Privacy Policy</p>
                    <p className='foot-para-1'>Terms & Conditions</p>
                </div>
                <div>
                    <div>
                        <h2 className='foot-head-1'>FOLLOW US</h2>
                        <img src={insta} className='img' alt='Instagram' />
                        <img src={linkedin} className='img' alt="LinkedIn" />
                    </div>
                    <div className='foot-3'>
                        <h2 className='foot-head-1'>mett&#257; muse ACCEPTS</h2>
                        <img src={gpay} className='img' alt="Google Pay" />
                        <img src={mastercard} className='img' alt="Mastercard Pay" />
                        <img src={paypal} className='img' alt="Pay Pay" />
                        <img src={amex} className='img' alt="Amex Pay" />
                        <img src={apay} className='img' alt="Apple Pay" />
                        <img src={pay} className='img' alt="Pay" />
                    </div>
                </div>
                
            </div>
            <p className='foot-para-4'>Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer>
    )
}

export default Footer