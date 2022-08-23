import './Footer.css'
const Footer = () => {
    return (

        <footer>

            <ul className="menu">
                <span className='copy-right'>© All right reserved</span>
                <div className='list'>
                    <li>
                        <a href="/about-us">
                            About Us
                            {/* <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span> */}
                        </a>
                    </li>
                    <li>
                        <a href="/privacy">
                            Privacy Policy
                            {/* <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span> */}
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                            {/* <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span> */}
                        </a>
                    </li>
                </div>


            </ul>

        </footer >


    )
}


export default Footer