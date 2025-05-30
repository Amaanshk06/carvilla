function Banner({onContactClick}) {
    return(
        <section className="banner-section">
            <div className="banner">
                <h1>get your desired car in reasonable price</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br />
                    incididunt ut labore etuolore magna aliqua.
                </p>
                <button  className="btn-c"  onClick={onContactClick}>Contact US</button>
            </div>
        </section>
    );
}

export default Banner;