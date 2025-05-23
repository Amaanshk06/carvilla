function Info() {

    const info = [
        {
            imgPath: "./assets/images/car.png",
            imgAltTitle: "Largest Dealership of car",
            title: "Largest Dealership of car",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        },
        {
            imgPath: "./assets/images/insurance.png",
            imgAltTitle: "Largest Dealership of car",
            title: "Largest Dealership of car",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        },
        {
            imgPath: "./assets/images/repair.png",
            imgAltTitle: "Insurance Support",
            title: "Insurance Support",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        }
    ]
    return (
        <section>
            <div className="row">
                {
                    info.map((i,index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="custom-card" style={i.css}>
                                    <img src={i.imgPath} alt={i.imgAltTitle} title={i.imgAltTitle} />
                                    <p>{i.title}</p>
                                    <p>{i.desc}
                                    </p>
                                    <hr className="bottom-line" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Info;