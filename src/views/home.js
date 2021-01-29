

const Home = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div id="carouselExampleIndicators" className="carousel slide col-md-12" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/the_mandalorian.jpg" className="d-block w-100 rounded-lg " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>The Mandalorian: Season 2</h5>
                                    <p>Don't miss out on Mando's journey. Only on <a target="_blank" href="https://www.disneyplus.com/es-cl">Disney+</a></p>
                                    
                                </div>
                                    
                            </div>
                            <div className="carousel-item">
                                <img src="images/the_mandalorian_2.jpg" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>The Mandalorian: Season 2</h5>
                                    <p>Will our little friend find his way to his kind? Find out more on October 30<sup>th</sup></p>
                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/the_mandalorian_3.jpeg" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>The Mandalorian: Season 2</h5>
                                    <p>What new adventures lay ahead for Mando?</p>
                                    
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-8 offset-2 embed-responsive embed-responsive-16by9 my-5">
                        <iframe src="https://www.youtube.com/embed/eW7Twd85m2g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" className="embed-responsive-item border border-warning" style={{ 'width': '650px', 'height': '380px' }}></iframe>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home;