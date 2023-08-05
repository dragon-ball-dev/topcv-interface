import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Footer';
import { getAllJobs } from '../../util/APIUtils';

class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listJob: [],
            jobName: '',
            level: '',
            minSalary: '',
            maxSalary: '',
            companyName: '',
            numberOfElements: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.loadJob = this.loadJob.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }


    loadJob() {

        getAllJobs(1, 10, this.state.level, this.state.minSalary, this.state.maxSalary, this.state.jobName, this.state.companyName)
            .then(response => {
                console.log("Response:", response)
                this.setState({
                    listJob: response.content,
                    numberOfElements: response.numberOfElements,
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    componentDidUpdate() {
        this.loadJob();
    }

    componentDidMount() {
        this.loadJob();

    }
    render() {
        console.log("DATA:", this.state.listJob)
        let list = this.state.listJob;
        const number = this.state.numberOfElements;
        list.map(job => console.log(job))
        console.log("Name", this.state.jobName)

        return (
            <main>


                {/* <div class="slider-area ">
                    <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Nhận công việc của bạn ❤</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="job-listing-area pt-120 pb-120">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-3 col-lg-3 col-md-4">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="small-section-tittle2 mb-45">
                                            <div class="ion"> <svg
                                                xmlns="https://www.google.com/url?sa=i&url=https%3A%2F%2Farena.fpt.edu.vn%2Fphotography%2F&psig=AOvVaw1MH6oWxcG5JohlCQ1u-JO5&ust=1690190745781000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjC96fBpIADFQAAAAAdAAAAABAI"
                                                xmlnsXlink="https://www.google.com/url?sa=i&url=https%3A%2F%2Farena.fpt.edu.vn%2Fphotography%2F&psig=AOvVaw1MH6oWxcG5JohlCQ1u-JO5&ust=1690190745781000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjC96fBpIADFQAAAAAdAAAAABAI"
                                                width="20px" height="12px">
                                                <path fill-rule="evenodd" fill="rgb(27, 207, 107)"
                                                    d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z" />
                                            </svg>
                                            </div>
                                            <h4>Lọc công việc</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="job-category-listing mb-50">

                                    <div class="single-listing">
                                        <div class="small-section-tittle2">
                                            <h4>Tên công việc</h4>
                                        </div>
                                        <div class="select-job-items2">
                                            <input type="text" class="js-input-from" name='jobName' value={this.state.jobName} onChange={this.handleInputChange} readonly />
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="single-listing">
                                        <div class="small-section-tittle2">
                                            <h4>Level</h4>
                                        </div>
                                        <div class="select-job-items2">
                                            <input type="text" class="js-input-from" name='level' value={this.state.level} onChange={this.handleInputChange} readonly />
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="single-listing">
                                        <div class="small-section-tittle2">
                                            <h4>Lương nhỏ nhấp</h4>
                                        </div>
                                        <div class="select-job-items2">
                                            <input type="text" class="js-input-from" name='minSalary' value={this.state.minSalary} onChange={this.handleInputChange} readonly />
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="single-listing">
                                        <div class="small-section-tittle2">
                                            <h4>Lương cao nhất</h4>
                                        </div>
                                        <div class="select-job-items2">
                                            <input type="text" class="js-input-from" name='maxSalary' value={this.state.maxSalary} onChange={this.handleInputChange} readonly />
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="single-listing">
                                        <div class="small-section-tittle2">
                                            <h4>Tên Công Ty</h4>
                                        </div>
                                        <div class="select-job-items2">
                                            <input type="text" class="js-input-from" name='companyName' value={this.state.companyName} onChange={this.handleInputChange} readonly />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-xl-9 col-lg-9 col-md-8">

                                <section class="featured-job-area">
                                    <div class="container">

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="count-job mb-35">
                                                    <span>{number} công việc</span>
                                                </div>
                                            </div>
                                        </div>
                                        {list.map(job => {
                                            if (job.status === "ENABLE") {
                                                return (
                                                    <div class="single-job-items mb-30">

                                                        <div class="job-items">
                                                            <div class="company-img">
                                                                <Link to="/job-detail"><img src="assets/img/icon/job-list1.png" alt="" /></Link>
                                                            </div>
                                                            <div class="job-tittle job-tittle2">

                                                                <Link to={`/job-detail/${job.id}`}><h4>{job.jobTitle}</h4></Link>

                                                                <ul>
                                                                    <li>{job.recruiter.company.name}</li>
                                                                    <li><i class="fas fa-map-marker-alt"></i>{job.address}</li>
                                                                    <li>{job.minSalary}$ - {job.maxSalary}$</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="items-link items-link2 f-right">
                                                            <Link to={`/job-detail/${job.id}`}>{job.level}</Link>
                                                            <span>{"Hạn: " + new Date(job.deadline).getDay() + " - " + new Date(job.deadline).getMonth() + " - " + new Date(job.deadline).getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div class="pagination-area pb-115 text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="single-wrap d-flex justify-content-center">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-start">
                                            <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                            <li class="page-item"><a class="page-link" href="#">02</a></li>
                                            <li class="page-item"><a class="page-link" href="#">03</a></li>
                                            <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div class="container-xxl py-5 bg-dark page-header mb-5">
                    <div class="container my-5 pt-5 pb-4">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb text-uppercase">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Job List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-12">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Job Title" name='jobName' value={this.state.jobName} onChange={this.handleInputChange} readonly/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Level" name='level' value={this.state.level} onChange={this.handleInputChange} readonly/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Company Name" name='companyName' value={this.state.companyName} onChange={this.handleInputChange} readonly/>
                                    </div>
                                </div>
                                <br />
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Max Salary" name='minSalary' value={this.state.minSalary} onChange={this.handleInputChange} readonly/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0" placeholder="Min Salary" name='maxSalary' value={this.state.maxSalary} onChange={this.handleInputChange} readonly/>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-dark border-0 w-100">Search</button>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-xxl py-5">
                <div class="container">
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <h6 class="mt-n1 mb-0">Featured</h6>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <h6 class="mt-n1 mb-0">Full Time</h6>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <h6 class="mt-n1 mb-0">Part Time</h6>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                {list.map(job => {
                                    if (job.status === "ENABLE") {
                                        return (
                                            <div class="job-item p-4 mb-4">
                                                <div class="row g-4">
                                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                                        <img class="flex-shrink-0 img-fluid border rounded" src="../assets/img/com-logo-1.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                                                        <div class="text-start ps-4">
                                                            <Link to={`/job-detail/${job.id}`}><h5>{job.jobTitle}</h5></Link>
                                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{job.minSalary}$ - {job.maxSalary}$</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                        <div class="d-flex mb-3">
                                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                                            <a class="btn btn-primary" href={`/job-detail/${job.id}`}>Job Detail</a>
                                                        </div>
                                                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: {new Date(job.deadline).getDay() + " - " + new Date(job.deadline).getMonth() + " - " + new Date(job.deadline).getFullYear()}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                <a class="btn btn-primary py-3 px-5" href="/job-list">Browse More Jobs</a>
                            </div>
                            <div id="tab-2" class="tab-pane fade show p-0">
                                {list.map(job => {
                                    if (job.status === "ENABLE") {
                                        return (
                                            <div class="job-item p-4 mb-4">
                                                <div class="row g-4">
                                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                                        <img class="flex-shrink-0 img-fluid border rounded" src="../assets/img/com-logo-1.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                                                        <div class="text-start ps-4">
                                                            <Link to={`/job-detail/${job.id}`}><h5>{job.jobTitle}</h5></Link>
                                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{job.minSalary}$ - {job.maxSalary}$</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                        <div class="d-flex mb-3">
                                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                                            <a class="btn btn-primary" href={`/job-detail/${job.id}`}>Job Detail</a>
                                                        </div>
                                                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: {new Date(job.deadline).getDay() + " - " + new Date(job.deadline).getMonth() + " - " + new Date(job.deadline).getFullYear()}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                <a class="btn btn-primary py-3 px-5" href="/job-list">Browse More Jobs</a>
                            </div>
                            <div id="tab-3" class="tab-pane fade show p-0">
                                {list.map(job => {
                                    if (job.status === "ENABLE") {
                                        return (
                                            <div class="job-item p-4 mb-4">
                                                <div class="row g-4">
                                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                                        <img class="flex-shrink-0 img-fluid border rounded" src="../assets/img/com-logo-1.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                                                        <div class="text-start ps-4">
                                                            <Link to={`/job-detail/${job.id}`}><h5>{job.jobTitle}</h5></Link>
                                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{job.address}</span>
                                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{job.minSalary}$ - {job.maxSalary}$</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                        <div class="d-flex mb-3">
                                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                                            <a class="btn btn-primary" href={`/job-detail/${job.id}`}>Job Detail</a>
                                                        </div>
                                                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: {new Date(job.deadline).getDay() + " - " + new Date(job.deadline).getMonth() + " - " + new Date(job.deadline).getFullYear()}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                <a class="btn btn-primary py-3 px-5" href="/job-list">Browse More Jobs</a>
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

export default JobList;