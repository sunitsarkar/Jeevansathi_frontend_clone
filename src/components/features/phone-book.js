import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import Notification from '../profile_layout/Notification'
import { Link } from 'react-router-dom'
import './style.css'
import OffCanvas from '../offcanvas/off-canvas'


export default function PhoneBook() {



    const [show, setShow] = useState(false);





    return <div className='features-main'>

        <div className="features-navbar">
            <div>
                <img src={logo} />
            </div>
            <div className='nav-logo'>
            <Link to="/profile_details" style={{border: '1px solid grey',borderRadius:'50%',color:"grey"}}>
                <svg viewBox="0 0 24 24" width='26' height='26' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path d="m21.486 17.16-.01.01-2.863 2.887-.002.002a.558.558 0 0 1-.787 0l-2.865-2.89-.004-.004a2.12 2.12 0 0 1 2.76-3.207l.52.387.522-.385a2.131 2.131 0 0 1 2.76.196 2.12 2.12 0 0 1-.03 3.004Z" stroke="currentColor" stroke-width="1.75"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.546 9.127a5.562 5.562 0 0 1-1.898 2.805c.441.175.866.383 1.272.621a2.905 2.905 0 0 0-1.543 1.28A7.415 7.415 0 0 0 2.86 19.718a.932.932 0 0 1-1.853-.204 9.27 9.27 0 0 1 5.765-7.582 5.562 5.562 0 1 1 8.775-2.805ZM8.15 10.65a3.707 3.707 0 1 0 4.12-6.165 3.707 3.707 0 0 0-4.12 6.165Z" fill="currentColor"></path></svg>
                </Link>
                <div onClick={() => { setShow(!show) }} style={{border: '1px solid grey',borderRadius:'50%'}}>
                <svg viewBox="0 0 24 24" width='26' height='26' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.75v-5c0-3.07-1.63-5.64-4.5-6.32V2.25h-3v2.18C7.64 5.11 6 7.67 6 10.75v5l-2 2v1h16v-1l-2-2Zm-6 6c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm-4-5h8v-6c0-2.48-1.51-4.5-4-4.5s-4 2.02-4 4.5v6Z" fill="#768493"></path></svg>
                </div>
                <button style={{ border: '1px solid grey',borderRadius:'40%', backgroundColor: 'white' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <svg viewBox="0 0 24 24" width='35' height='24' color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6 text-neutral-500 lg:block"><path d="M11 16h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Zm10-8H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"></path></svg>
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
                    <OffCanvas />
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
                    <Link to='/landing'>
                        <div className='left-side-items'>
                            <h6>Matches</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </Link>
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

            {
                show ? <Notification /> : <div className='phone-box'>
                    <div className='settings-head'>
                        <Link to='/landing' className='text-dark'>
                            <div style={{ display: 'inline' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                                </svg>
                            </div>
                        </Link>
                        <div style={{ display: 'inline', marginLeft: '35%', textAlign: 'center' }}>
                            <h4 ><b>Phonebook</b></h4>
                        </div>
                    </div>
                    <br /><br />
                    <div className='phone-body'>
                        <div style={{ height: '144px', width: '144px' }}>
                            <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-16 h-36 w-36">
                                <circle cx="74" cy="74" r="74" fill="#F3F8FF"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.514 143H2.01C.898 143 0 142.101 0 141.014V77.477c0-1.112.898-2.01 2.01-2.01h109.504c1.111 0 1.986.898 1.986 2.01v63.537a1.983 1.983 0 0 1-1.986 1.986Z" fill="#156CDD"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.75 75.467H2.01c-1.112 0-2.01.898-2.01 2.01v63.537C0 142.101.898 143 2.01 143h54.74V75.467Z" fill="#0795FF"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m56.75 140.635-46.203-14.117a1.973 1.973 0 0 1-1.396-1.868V54.965c0-1.395 1.42-2.34 2.696-1.82L56.751 71.54v69.094Z" fill="#DFE8F4"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m56.75 140.635 46.228-14.117a1.95 1.95 0 0 0 1.371-1.868V54.965a1.957 1.957 0 0 0-2.695-1.82L56.75 71.54v69.094Z" fill="#CCD8E5"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m20.005 82.23 25.915 9.269v-3.216l-25.916-9.27v3.216ZM20.005 93.793l25.915 8.606v-3.215l-25.916-8.631v3.24ZM20.005 104.763l25.915 8.513v-3.216l-25.916-8.512v3.215Z" fill="#fff"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m93.52 82.23-25.917 9.269v-3.216l25.917-9.27v3.216ZM93.52 93.793l-25.917 8.606v-3.215l25.917-8.631v3.24ZM93.52 104.763l-25.917 8.513v-3.216l25.917-8.512v3.215ZM139.288 83.733a4.012 4.012 0 0 1-5.692 0l-12.197-12.192a4.02 4.02 0 0 1 0-5.687 4.011 4.011 0 0 1 5.692 0l12.197 12.192a4.02 4.02 0 0 1 0 5.687Z" fill="#DFE8F4"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.478 66.782c-8.114-6.284-8.112-18.443.003-24.727 5.53-4.285 13.455-4.285 18.985 0 8.114 6.284 8.113 18.454-.001 24.738-5.532 4.273-13.457 4.273-18.987-.011Z" fill="#F3F8FF"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.478 66.782c-8.114-6.284-8.112-18.443.003-24.727 5.531-4.285 13.455-4.285 18.985 0 8.115 6.284 8.113 18.454-.001 24.738-5.532 4.273-13.457 4.273-18.987-.011Zm38.735 11.187-6.297-6.295c-2.375-2.375-3.244-5.942-2.022-9.067 3.095-7.93 1.536-17.26-4.696-23.754-8.3-8.647-22.31-9.189-31.228-1.182-9.654 8.669-9.954 23.589-.898 32.644 6.496 6.505 16.002 8.173 24.06 5.036 3.155-1.225 6.747-.331 9.141 2.065l6.323 6.317a4.03 4.03 0 0 0 6.225-.651c1.062-1.601.75-3.755-.608-5.113Z" fill="#DFE8F4"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m135.459 74.214-5.692 5.698 3.829 3.821a4.012 4.012 0 0 0 5.692 0 4.02 4.02 0 0 0 0-5.687l-3.829-3.832Z" fill="#156CDD"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m135.459 74.214-5.692 5.698 1.726 1.723 5.691-5.699-1.725-1.722ZM116.563 56.702l-.787-.787a2.743 2.743 0 0 0-3.872 0 .948.948 0 0 0-.273.663.927.927 0 0 1-.794.924 5.163 5.163 0 0 1-5.773-5.774c.058-.458.466-.793.928-.793a.925.925 0 0 0 .659-.273 2.737 2.737 0 0 0 0-3.872l-.787-.787c-1.111-1.111-2.999-.98-3.861.335-.898 1.37-1.35 2.999-1.236 4.652a11.61 11.61 0 0 0 3.386 7.423 11.61 11.61 0 0 0 7.423 3.386 7.517 7.517 0 0 0 4.652-1.232c1.315-.863 1.449-2.75.335-3.865Z" fill="#0795FF"></path>
                            </svg>
                        </div><br /><br />
                        <div><b>Discover your viewed contacts here</b></div>
                        <div style={{ width: '75%', textAlign: 'center' }}>Find contact details of your matches &amp; get to know them better with a membership</div>
                        <div style={{ color: 'red' }}>Upgrade Membership</div>
                    </div>
                </div>
            }
            <div className="landing-child" id='two'>
                <br />
                <h5 style={{ textAlign: 'center' }}>You are <span style={{ color: 'red' }}>missing</span> out on premium benefits!</h5>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-view"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" /><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /></svg>
                    <h6 style={{ width: '70%' }}>get upto 3x more porfile view</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-forwarded"><polyline points="18 2 22 6 18 10" /><line x1="14" x2="22" y1="6" y2="6" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <h6 style={{ width: '70%' }}>Unlimited voice and video call</h6>
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