import React, { Component } from 'react';
import Footer from '../Footer';
import { getJobById, submitRecruiment } from '../../util/APIUtils';
import Alert from 'react-s-alert';

class JobDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobDetail: '',
            submit: '',

        };
        this.loadJobDetails = this.loadJobDetails.bind(this);
    }

    loadJobDetails() {
        getJobById(this.props.match.params.id)
            .then(response => {
                console.log("Response:", response)
                this.setState({
                    jobDetail: response,
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    handleRecruitment = () => {
        submitRecruiment(this.props.match.params.id)
            .then(response => {
                Alert.success(response.message)
            })
            .catch(error => {
                Alert.error((error && error.message))
            })
    }

    componentDidMount() {

        this.loadJobDetails()
    }
    render() {

        const list = this.state.jobDetail;

        return (
            <main>
                {/* 
                <div className="slider-area ">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>✨ Photographer ✨</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job-post-company pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-7 col-lg-8">

                                <div className="single-job-items mb-50">
                                    <div className="job-items">
                                        <div className="company-img company-img-details">
                                            <a href="#"><img src="../../../public/assets/img/icon/job-list3.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="#">
                                                <h4>{list.jobTitle}</h4>
                                            </a>
                                            <ul>
                                                <li><i className="fas fa-map-marker-alt"></i>{list.address}</li>
                                                <li>{list.minSalary}$ - {list.maxSalary}$</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="job-post-details">
                                    <div className="post-details1 mb-50">

                                        <div className="small-section-tittle">
                                            <h4>Mô Tả Công Việc:</h4>
                                        </div>
                                        <p>{list.description}</p>
                                    </div>
                                    <div className="post-details2  mb-50">

                                        <div className="small-section-tittle">
                                            <h4>Yêu Cầu:</h4>
                                        </div>
                                        <ul>
                                            <li>{list.requireJob}</li>
                                        </ul>
                                    </div>
                                    <div className="post-details2  mb-50">

                                        <div className="small-section-tittle">
                                            <h4>Phúc Lợi:</h4>
                                        </div>
                                        <ul>
                                            <li>{list.welfare}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-4 col-lg-4">
                                <div className="post-details3  mb-50">

                                    <div className="small-section-tittle">
                                        <h4>Công việc:</h4>
                                    </div>
                                    <ul>
                                        <li>Địa chỉ : <span>{list.address}</span></li>
                                        <li>Level : <span>{list.level}</span></li>
                                        <li>Lương :  <span>{list.maxSalary}$</span></li>
                                        <li>Hạn ứng tuyển : <span>{new Date(list.deadline).getDay() + " - " + new Date(list.deadline).getMonth() + " - " + new Date(list.deadline).getFullYear()}</span></li>
                                    </ul>
                                    {this.props.authenticated ? (
                                        <div className="apply-btn2">
                                            <a href="#" className="btn" onClick={() => this.handleRecruitment()}>Ứng Tuyển</a>
                                        </div>
                                    ) : (
                                        "Vui lòng đăng nhập trước khi ứng tuyển."
                                    )}

                                </div>
                                <div className="post-details4  mb-50">

                                    <div className="small-section-tittle">
                                        <h4>Thông tin công ty</h4>
                                    </div>
                                    <span>Line Sky - Hành trình đồng hàng Photographer</span>
                                    <p>Hành trình tiến đến thành công</p>
                                    <ul>
                                        <li>Tên Công ty: <span>Photo Sky</span></li>
                                        <li>Website: <span>photoghapher.com</span></li>
                                        <li>Email: <span>company@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="container-xxl py-5 bg-dark page-header mb-5">
                    <div className="container my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gy-5 gx-4">
                            <div className="col-lg-8">
                                <div className="d-flex align-items-center mb-5">
                                    <img className="flex-shrink-0 img-fluid border rounded" src="../../assets/img/com-logo-2.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                                    <div className="text-start ps-4">
                                        <h3 className="mb-3">{list.jobTitle}</h3>
                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{list.address}</span>
                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{list.level}</span>
                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{list.minSalary}$ - {list.maxSalary}$</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Job description</h4>
                                    <p>{list.description}</p>
                                    <h4 className="mb-3">Responsibility</h4>
                                    <p>{list.requireJob}</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                                    </ul>
                                    <h4 className="mb-3">Qualifications</h4>
                                    <p>{list.welfare}</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                        <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                                    </ul>
                                </div>

                                <div className="">                        
                                    <form>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" onClick={() => this.handleRecruitment()} type="submit">Apply Now</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-4">Job Summery</h4>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: {list.address}</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: {list.minSalary}$ - {list.maxSalary}$</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Location: {list.address}</p>
                                    <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: {new Date(list.deadline).getDay() + " - " + new Date(list.deadline).getMonth() + " - " + new Date(list.deadline).getFullYear()}</p>
                                </div>
                                <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-4">Company Detail</h4>
                                    <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        )
    }
}

export default JobDetails;