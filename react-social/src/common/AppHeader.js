import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class AppHeader extends Component {
    render() {
        return (


            // <header>
            //     <div class="header-area header-transparrent">
            //         <div class="headder-top header-sticky">
            //             <div class="container">
            //                 <div class="row align-items-center">
            //                     <div class="col-lg-3 col-md-2">

            //                         <div class="logo">
            //                             <a href="index.html"><img src="../assets/img/logo/logo.png" alt="" /></a>
            //                         </div>
            //                     </div>
            //                     <div class="col-lg-9 col-md-9">

            //                             <div class="menu-wrapper">

            //                                 <div class="main-menu">
            //                                     <nav class="d-none d-lg-block">

            //                                         <ul id="navigation">
            //                                             <li>
            //                                                 <NavLink to="/">Trang chủ</NavLink>
            //                                             </li>
            //                                             <li>
            //                                                 <NavLink to="/job-list">Việc làm</NavLink>
            //                                             </li>
            //                                             <li><a href="#">Thông tin</a>
            //                                                 <ul class="submenu">
            //                                                     <li><NavLink to="/advertisement">Quảng Cáo</NavLink>  </li>

            //                                                 </ul>
            //                                             </li>
            //                                             <li>
            //                                                 <NavLink to="/contact">Liên hệ</NavLink>
            //                                             </li>
            //                                         </ul>

            //                                     </nav>
            //                                 </div>
            //                             {!this.props.authenticated ? (
            //                                 <div class="header-btn d-none f-right d-lg-block">
            //                                     <NavLink to="/login" className="btn head-btn1">Đăng Nhập</NavLink>
            //                                     <NavLink to="/signup" className="btn head-btn1">Đăng Kí</NavLink>
            //                                     <NavLink to="/signup-recruiter" className="btn btn-primary head-btn2">Đăng kí tuyển dụng</NavLink>
            //                                 </div>
            //                             ) : (
            //                                 <div class="header-btn d-none f-right d-lg-block">
            //                                 <NavLink to="/profile" className="btn head-btn1">Profile</NavLink>
            //                                 <a className="btn head-btn1" onClick={this.props.onLogout}>Logout</a>
            //                             </div>
            //                             )}
            //                             </div>

            //                     </div>


            //                     <div class="col-12">
            //                         <div class="mobile_menu d-block d-lg-none"></div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            // </header>
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 class="m-0 text-primary">JobPortal</h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {!this.props.authenticated ? (
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to="/" className="nav-item nav-link" activeClassName="active" >HOME</NavLink>
                            <NavLink to="/job-list" className="nav-item nav-link" activeClassName="active" >JOB</NavLink>
                            <NavLink to="/advertisement" className="nav-item nav-link" activeClassName="active" >ADVERTISEMENT</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active" >CONTACT</NavLink>
                        </div>
                        <Link to="/login" className="btn btn-primary border-0 rounded-0 py-4 px-lg-5 d-none d-lg-block" activeClassName="active" style={{ textDecoration: 'none', color: 'green', backgroundColor: "white", marginRight:"3px" }}>
                            LOGIN
                        </Link>


                        <Link to="/signup" className="btn btn-primary border-0 rounded-0 py-4 px-lg-5 d-none d-lg-block" activeClassName="active" style={{ textDecoration: 'none', color: 'green', backgroundColor: "white", marginRight:"3px" }}>
                            SIGN UP
                        </Link>

                        <Link to="/login-recruiter" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" activeClassName="active" style={{ textDecoration: 'none', color: 'white' }}>
                            POST A JOB
                        </Link>
                    </div>



                ) : (
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to="/" className="nav-item nav-link" activeClassName="active" >HOME</NavLink>
                            <NavLink to="/job-list" className="nav-item nav-link" activeClassName="active" >JOB</NavLink>
                            <NavLink to="/advertisement" className="nav-item nav-link" activeClassName="active" >ADVERTISEMENT</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active" >CONTACT</NavLink>
                        </div>
                        <NavLink to="/profile" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Profile</NavLink> &nbsp;
                        <a className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" onClick={this.props.onLogout}>Logout</a>
                    </div>

                )}

            </nav>
        )

    }
}

export default AppHeader;