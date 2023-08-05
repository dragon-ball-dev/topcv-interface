import React from "react";
import { Link, NavLink } from 'react-router-dom';

import { getAllJobs } from '../util/APIUtils';

class JobFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listJob: [],
        }

        this.loadJob = this.loadJob.bind(this);
    }

    loadJob() {
        getAllJobs(1, 5, '', '', '', '', '')
            .then(response => {
                console.log("Response:", response)
                this.setState({
                    listJob: response.content,
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }


    componentDidMount() {
        this.loadJob();

    }
    render() {
        let list = this.state.listJob;
        list.map(job => console.log(job))
        return (
            // <div class="row justify-content-center">
            //     <div class="col-xl-10">
            //         {list.map(job => {
            //             if(job.status === "ENABLE") {
            //             return (
            //             <div class="single-job-items mb-30">

            //                 <div class="job-items">
            //                     <div class="company-img">
            //                         <Link to="/job-detail"><img src="assets/img/icon/job-list1.png" alt="" /></Link>
            //                     </div>
            //                     <div class="job-tittle job-tittle2">

            //                         <Link to={`/job-detail/${job.id}`}><h4>{job.jobTitle}</h4></Link>

            //                         <ul>
            //                             <li>{job.recruiter.company.name}</li>
            //                             <li><i class="fas fa-map-marker-alt"></i>{job.address}</li>
            //                             <li>{job.minSalary}$ - {job.maxSalary}$</li>
            //                         </ul>
            //                     </div>
            //                 </div>
            //                 <div class="items-link items-link2 f-right">
            //                     <Link to={`/job-detail/${job.id}`}>{job.level}</Link>
            //                     <span>{"Hạn: " + new Date(job.deadline).getDay() + " - " + new Date(job.deadline).getMonth() + " - " + new Date(job.deadline).getFullYear()}</span>
            //                 </div>
            //             </div>
            //             )
            //         }})}
            //     </div>

            // </div>
            <div class="container-xxl py-5">
                <div class="container">
                    <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
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
        )
    }
}

export default JobFeatures;