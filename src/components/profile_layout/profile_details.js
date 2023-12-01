import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import Match from '../profile_layout/Match'
import Notification from '../profile_layout/Notification'
import { Link } from 'react-router-dom'
import './style.css'
import OffCanvas from '../offcanvas/off-canvas'

export default function Details() {



    const [show, setShow] = useState(false);


    return <div className='profile-details'>

        <div id="landing-navbar">
            <div>
                <img src={logo} />
            </div>
            <div id='nav-logo'>
                <div onClick={()=>{setShow(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person text-dark" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                </div>
                <div onClick={(e) => { e.preventDefault(); setShow(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                </div>
                <button style={{ border: 'none', backgroundColor: 'white' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6" /><line x1="21" x2="9" y1="12" y2="12" /><line x1="21" x2="7" y1="18" y2="18" /></svg>
                </button>

                <div style={{ borderTopLeftRadius: "5%", borderBottomLeftRadius: "5%" }} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div style={{ paddingBottom: "10px", borderBottom: '1px solid #f0edee', margin: "0px 15px" }}>
                        <div class="offcanvas-header">
                            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                                <div>
                                    <h2>Hi Sunit!</h2>
                                    <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
                                </div>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>Flat 60% off till 21 Nov</h6>
                            <button type="button" class="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                        </div>
                    </div>
                    <OffCanvas/>
                </div>
            </div>
        </div>
        <div id="landing-body">
            <div className="landing-child" id='one'>
                <div style={{ display: 'flex', justifyContent: "space-around", borderBottom: '1px solid #f0edee' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                    <div>
                        <h2>Hi Sunit!</h2>
                        <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
                    </div>
                </div>
                <br />
                <div className='left-side'>
                    <Link to="/landing" >
                        <div className='left-side-items'>
                            <h6>Matches</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div></Link>
                    <div className='left-side-items'>
                        <h6>Activity</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div className='left-side-items'>
                        <h6>Search</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div className='left-side-items'>
                        <h6>Messanger</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </div>
            </div>

            {show ? <Notification /> : <div className='profile-box'>
                <div >
                    <h1>user profile details</h1>
                </div>
            </div>}

            <div className="landing-child" id='two'>
                <br />
                <h5 style={{ textAlign: 'center' }}>You are <span style={{ color: 'red' }}>missing</span> out on premium benefits!</h5>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-view"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" /><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /></svg>
                    <h6 style={{ width: '70%' }}>Get upto 3x more porfile view</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-forwarded"><polyline points="18 2 22 6 18 10" /><line x1="14" x2="22" y1="6" y2="6" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <h6 style={{ width: '70%' }}>Unlimited voice and video cal</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" /><rect width="18" height="18" x="3" y="4" rx="2" /><circle cx="12" cy="10" r="2" /><line x1="8" x2="8" y1="2" y2="4" /><line x1="16" x2="16" y1="2" y2="4" /></svg>
                    <h6 style={{ width: '70%' }}>Get access to contact details</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    <h6 style={{ width: '70%' }}>Perform unlimited search</h6>
                </div>
                <br /><br />
                <div style={{ textAlign: "center" }}>
                    <h6>Flat 60% off till 21 Nov</h6>
                    <button type="button" class="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                </div>

            </div>
        </div>

    </div>
}