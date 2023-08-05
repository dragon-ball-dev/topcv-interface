import React, { Component } from 'react';
import Footer from './Footer';
import JobFeatures from './JobFeatures';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid p-0">

                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="../assets/img/carousel-1.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(43, 57, 64, .5)" }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-center">Search A Job</a>
                                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight text-center">Find A Talent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Keyword" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0">
                                            <option selected>Category</option>
                                            <option value="1">Category 1</option>
                                            <option value="2">Category 2</option>
                                            <option value="3">Category 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0">
                                            <option selected>Location</option>
                                            <option value="1">Location 1</option>
                                            <option value="2">Location 2</option>
                                            <option value="3">Location 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark border-0 w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                                    <h6 className="mb-3">Marketing</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                    <h6 className="mb-3">Customer Service</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h6 className="mb-3">Human Resource</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                                    <h6 className="mb-3">Project Management</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                                    <h6 className="mb-3">Business Development</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                                    <h6 className="mb-3">Sales & Communication</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                                    <h6 className="mb-3">Teaching & Education</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a className="cat-item rounded p-4" href="">
                                    <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                                    <h6 className="mb-3">Design & Creative</h6>
                                    <p className="mb-0">123 Vacancy</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="row g-0 about-bg rounded overflow-hidden">
                                    <div className="col-6 text-start">
                                        <img className="img-fluid w-100" src="../assets/img/about-1.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid" src="../assets/img/about-2.jpg" style={{ width: "85%", marginTop: "15%" }} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid" src="../assets/img/about-3.jpg" style={{ width: "85%" }} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid w-100" src="../assets/img/about-4.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>

                            </div>
                        </div>
                    </div>
                </div>

                <JobFeatures />

                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="../assets/img/testimonial-1.jpg" style={{ width: "50px", height: "50px" }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Charli Puth</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="../assets/img/testimonial-2.jpg" style={{ width: "50px", height: "50px" }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">John Hans</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;