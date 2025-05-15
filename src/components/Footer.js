function Footer(){
    return(
        <footer>
    <div className="custom-container">
        <div className="row">
            <div className="col-md-6">
                <p className="footer-p">&copy; Copyright Designed And Developed By HardReload</p>  
            </div>
            <div className="col-md-6">
                <div className="footer-icons">
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank">
                        <img src="./assets/images/social/fb.png" alt="facebook" />   
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="./assets/images/social/ig.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank">
                        <img src="./assets/images/social/lin.png" alt="linkedin" />
                    </a>
                    <a href="https://in.pinterest.com/" target="_blank">
                        <img src="./assets/images/social/pin.png" alt="pinterest" />
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank">
                        <img src="./assets/images/social/WA.png" alt="whatsapp" />   
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
}

export default Footer;