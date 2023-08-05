import React from "react";
import Footer from "./Footer";
import { getAdvertisement } from "../util/APIUtils";

class Advertisement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAdvertisment: [],
            keyword: ''
        }

        this.loadAdvertisement = this.loadAdvertisement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue,
        });
    }

    loadAdvertisement() {
        getAdvertisement(1, 100, this.state.keyword)
            .then(response => {
                console.log("Response:", response)
                this.setState({
                    listAdvertisment: response.content,
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    componentDidUpdate() {
        this.loadAdvertisement()
    }

    componentDidMount() {
        this.loadAdvertisement();

    }
    render() {
        let list = this.state.listAdvertisment;
        console.log("ADS", list)
        return (
            <main>
                {/* <div class="slider-area ">
                    <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Quảng Cáo</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <section class="blog_area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mb-5 mb-lg-0">
                                <div class="blog_left_sidebar">
                                    {list.map(adv => {
                                        return (
                                            <article class="blog_item">
                                                <div class="blog_item_img">
                                                    <img  src={`http://localhost:8080/image/`+adv.image.replace('photographer/files/','')}  height={"400px"} width={"600px"} alt="" />
                                                    <a href="#" class="blog_item_date">
                                                        <h3>10</h3>
                                                        <p>New</p>
                                                    </a>
                                                </div>

                                                <div class="blog_details">
                                                    <a class="d-inline-block" href="single-blog.html">
                                                        <h2>{adv.title}</h2>
                                                    </a>
                                                    <p>{adv.description}</p>
                                                </div>
                                            </article>
                                        )
                                    })}
                                    {/* <nav class="blog-pagination justify-content-center d-flex">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Previous">
                                                    <i class="ti-angle-left"></i>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link">1</a>
                                            </li>
                                            <li class="page-item active">
                                                <a href="#" class="page-link">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Next">
                                                    <i class="ti-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav> */}
                {/* </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog_right_sidebar">
                                    <aside class="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder='Search Keyword' 
                                                    name='keyword' value={this.state.keyword} onChange={this.handleInputChange}
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Search Keyword'" />
                                                    <div class="input-group-append">
                                                        <button class="btns" type="button"><i class="ti-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <div class="container-xxl py-5 bg-dark page-header mb-5">
                    <div class="container my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Advertisement</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb text-uppercase">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Advertisement</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="container">
                        <h1 class="text-center mb-5">Our Advertisement Say!!!</h1>
                        <div class="owl-carousel testimonial-carousel col-md-12">
                            {list.map(adv => {
                                return (
                                    <div class="testimonial-item bg-light rounded p-4 ">
                                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                        <p>{adv.description}</p>
                                        <div class="d-flex align-items-center">
                                            <img class="img-fluid flex-shrink-0 rounded" src={`http://localhost:8080/image/`+adv.image.replace('photographer/files/','')} style={{ width: "850px", height: "400px" }} />
                                            <div class="ps-3">
                                                <h5 class="mb-1">{adv.title}</h5>
                                                <small>Profession</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }
}

export default Advertisement;