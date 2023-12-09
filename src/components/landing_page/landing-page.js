import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import './landing.css'
import Match from '../profile_layout/Match'
import Notification from '../profile_layout/Notification'
import { Link } from 'react-router-dom'
import OffCanvas from '../offcanvas/off-canvas'
import MobileAside from '../profile_layout/MobileAside'

function MobileNav(props) {

    const show = props.props.show
    const setShow = props.props.setShow

    return <div className='landing-mobile'>
        <button style={{ border: 'none', backgroundColor: 'white' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6" /><line x1="21" x2="9" y1="12" y2="12" /><line x1="21" x2="7" y1="18" y2="18" /></svg>
        </button>

        <div style={{ borderTopRightRadius: "5%", borderBottomRightRadius: "5%" }} className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <div style={{ display: 'flex', justifyContent: "space-around" }}>
                    <div className='user-icon' >
                        <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <h4>Hi Sunit!</h4>
                        <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div style={{ textAlign: "center" }}>
                <h6>Flat 60% off till 21 Nov</h6>
                <button type="button" className="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
            </div>
            <OffCanvas />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', width: '20%' }}>
            <Link to="/profile_details">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person text-dark" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
            </Link>

            <div onClick={() => { setShow(!show) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
            </div>
        </div>

    </div>
}


export default function LandingPage() {



    const [show, setShow] = useState(false)



    return <div className='landing-main'>
        <div className='landing-mobile-nav'>
            <MobileNav props={{ show, setShow }} />
        </div>

        <div className="landing-navbar">
            <div>
                <img src={logo} />
            </div>
            <div className='nav-logo'>
                <Link to="/profile_details" style={{ border: '1px solid grey', borderRadius: '50%', color: "grey" }}>
                    <svg viewBox="0 0 24 24" width='26' height='26' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path d="m21.486 17.16-.01.01-2.863 2.887-.002.002a.558.558 0 0 1-.787 0l-2.865-2.89-.004-.004a2.12 2.12 0 0 1 2.76-3.207l.52.387.522-.385a2.131 2.131 0 0 1 2.76.196 2.12 2.12 0 0 1-.03 3.004Z" stroke="currentColor" stroke-width="1.75"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.546 9.127a5.562 5.562 0 0 1-1.898 2.805c.441.175.866.383 1.272.621a2.905 2.905 0 0 0-1.543 1.28A7.415 7.415 0 0 0 2.86 19.718a.932.932 0 0 1-1.853-.204 9.27 9.27 0 0 1 5.765-7.582 5.562 5.562 0 1 1 8.775-2.805ZM8.15 10.65a3.707 3.707 0 1 0 4.12-6.165 3.707 3.707 0 0 0-4.12 6.165Z" fill="currentColor"></path></svg>
                </Link>
                <div onClick={() => { setShow(!show) }} style={{ border: '1px solid grey', borderRadius: '50%' }}>
                    <svg viewBox="0 0 24 24" width='26' height='26' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.75v-5c0-3.07-1.63-5.64-4.5-6.32V2.25h-3v2.18C7.64 5.11 6 7.67 6 10.75v5l-2 2v1h16v-1l-2-2Zm-6 6c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm-4-5h8v-6c0-2.48-1.51-4.5-4-4.5s-4 2.02-4 4.5v6Z" fill="#768493"></path></svg>
                </div>
                <button style={{ border: '1px solid grey', borderRadius: '40%', backgroundColor: 'white' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg viewBox="0 0 24 24" width='35' height='24' color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6 text-neutral-500 lg:block"><path d="M11 16h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Zm10-8H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"></path></svg>
                </button>

                <div style={{ borderTopLeftRadius: "5%", borderBottomLeftRadius: "5%" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div style={{ paddingBottom: "10px", borderBottom: '1px solid #f0edee', margin: "0px 15px" }}>
                        <div className="offcanvas-header">
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div className='user-icon' >
                                    <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <h4>Hi Sunit!</h4>
                                    <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>Flat 60% off till 21 Nov</h6>
                            <button type="button" className="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                        </div>
                    </div>
                    <OffCanvas />
                </div>
            </div>
        </div>
        <div id="landing-body">
            <div className="landing-child" id='one'>
                <div style={{ display: 'flex', justifyContent: "space-around", borderBottom: '1px solid #f0edee' }}>
                    <div className='user-icon' >
                        <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg>
                    </div>
                    <div >
                        <h4>Hi Sunit!</h4>
                        <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
                    </div>
                </div>
                <br />
                <div className='left-side'>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }} className='text-dark'>
                        <h6>Matches</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                        <h6>Activity</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                        <h6>Search</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                        <h6>Messanger</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </div>
            </div>

            {
                show ? <Notification /> : <Match />
            }
            <div className="landing-child" id='two'>
                <br />
                <h5 style={{ textAlign: 'center' }}>You are <span style={{ color: 'red' }}>missing</span> out on premium benefits!</h5>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg viewBox="0 0 48 48" height='50' width='50' fill="none" xmlns="http://www.w3.org/2000/svg" alt="profileViewIcon" class="h-12 w-12 shrink-0"><rect width="48" height="48" rx="24" fill="#F5F5FF"></rect><g clip-path="url(#profileViewIcon_svg__a)" fill="#6F6CD0"><path d="M26.526 33a12.89 12.89 0 0 1-7.599-3.693c-2.038-2.038-3.354-4.755-3.736-7.6-.042-.297 0-.594.085-.89.085-.256.212-.51.425-.808.17-.212.424-.382.721-.551a2.12 2.12 0 0 1 .892-.213h2.038c.509 0 1.018.17 1.4.51.34.297.552.637.68 1.104.042.127.042.297.085.424.042.212.085.425.127.594.043.085.043.17.085.213.042.17.127.382.17.552.127.594-.17 1.06-.764 1.485l-.255.213c.382.637.806 1.23 1.316 1.74a7.412 7.412 0 0 0 1.698 1.274l.085-.212c.17-.298.425-.552.764-.68.17-.085.34-.085.51-.085.34 0 .679.085 1.018.213.128.042.255.085.34.085.764.17 1.316.467 1.698.849.552.594.552 1.485.552 2.25v.212c0 .467 0 .934-.085 1.4-.255.977-1.061 1.656-2.038 1.656h-.212V33Zm-7.811-12.226c-.255 0-.552 0-.764.042-.213 0-.382.043-.51.043-.255 0-.467.042-.594.17-.212.212-.17.594-.128.848.68 3.736 3.1 6.963 6.538 8.66l.128.086c.636.297 2.122 1.019 3.099 1.019.424 0 .721-.128.806-.425.043-.085.043-.212.043-.34V29.18c0-.212 0-.467-.128-.636-.084-.213-.34-.34-.636-.425l-.383-.127c-.254-.085-.509-.17-.721-.17h-.043c-.254 0-.34.212-.424.51-.085.212-.17.466-.382.636a.91.91 0 0 1-.51.17c-.212 0-.467-.085-.679-.17-1.868-1.019-3.481-2.674-4.373-4.542a1.232 1.232 0 0 1-.127-.467c0-.297.212-.552.594-.764.043-.043.128-.043.213-.085.17-.043.51-.17.51-.255 0-.043 0-.127-.043-.212a2.82 2.82 0 0 1-.255-.85c0-.042 0-.127-.043-.17-.042-.212-.084-.466-.212-.594-.085-.17-.424-.254-.976-.254ZM25.125 20.773a.744.744 0 0 1-.721-.721c0-.425.34-.722.721-.722h3.057c.424 0 .722.34.722.722 0 .424-.34.721-.722.721h-3.057Z"></path><path d="M25.125 23.83a.715.715 0 0 1-.721-.722c0-.382.34-.721.721-.721h3.057c.212 0 .424.085.552.254.127.128.212.34.212.51 0 .382-.34.722-.722.722h-3.099v-.043Z"></path><path d="M30.05 32.49c-.467 0-.722-.424-.722-.806 0-.212.043-.425.17-.552a.685.685 0 0 1 .552-.255h.637c.254 0 .51-.212.51-.51V17.166a.516.516 0 0 0-.51-.51H20.583a.516.516 0 0 0-.51.51v.637c0 .467-.424.722-.806.722-.425 0-.807-.255-.807-.722v-.637c0-1.189.977-2.165 2.123-2.165h10.146c.552 0 1.104.212 1.486.637.382.424.637.934.594 1.528v13.16c0 1.19-.976 2.166-2.122 2.166h-.637Z"></path></g><defs><clipPath id="profileViewIcon_svg__a"><path fill="#fff" transform="translate(15.149 15)" d="M0 0h17.703v18H0z"></path></clipPath></defs></svg>
                    <h6 style={{ width: '70%' }}>Get upto 3x more porfile view</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg viewBox="0 0 48 48" height='50' width='50' fill="none" xmlns="http://www.w3.org/2000/svg" alt="profileViewIcon" class="h-12 w-12 shrink-0"><rect width="48" height="48" rx="24" fill="#FEF5E6"></rect><path d="M32.47 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.44 4c-.22 0-.45-.07-.67-.12a9.435 9.435 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.477 12.477 0 0 1-2.67-2 12.827 12.827 0 0 1-2-2.66L22 21a2 2 0 0 0 1-2.48c-.159-.427-.29-.865-.39-1.31-.05-.23-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3.001 3.001 0 0 0-2.24 1 2.999 2.999 0 0 0-.73 2.39A19 19 0 0 0 30 33.91c.13.01.26.01.39 0a3 3 0 0 0 3-3v-3A3 3 0 0 0 30.91 25Zm.49 6a1.002 1.002 0 0 1-1.15 1 17.12 17.12 0 0 1-9.87-4.85 17.14 17.14 0 0 1-4.84-9.93 1 1 0 0 1 .25-.82.999.999 0 0 1 .74-.34h3a1 1 0 0 1 1 .79c.04.273.09.543.15.81.116.527.27 1.045.46 1.55l-1.4.65a1.001 1.001 0 0 0-.49 1.33 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .56-.52l.63-1.4a13.68 13.68 0 0 0 1.58.46c.26.06.54.11.81.15a1 1 0 0 1 .78 1L31.4 31Z" fill="#FDB529"></path></svg>
                    <h6 style={{ width: '70%' }}>Unlimited voice and video call</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg viewBox="0 0 48 48" height='50' width='50' fill="none" xmlns="http://www.w3.org/2000/svg" alt="profileViewIcon" class="h-12 w-12 shrink-0"><rect width="48" height="48" rx="24" fill="#E6F7EE"></rect><g clip-path="url(#contactDetailIcon_svg__a)" fill="#26CBA3"><path d="M26.526 33a12.89 12.89 0 0 1-7.599-3.693c-2.038-2.038-3.354-4.755-3.736-7.6-.042-.297 0-.594.085-.89.085-.256.212-.51.425-.808.17-.212.424-.382.721-.551a2.12 2.12 0 0 1 .892-.213h2.038c.509 0 1.018.17 1.4.51.34.297.552.637.68 1.104.042.127.042.297.085.424.042.212.085.425.127.594.043.085.043.17.085.213.042.17.127.382.17.552.127.594-.17 1.06-.764 1.485l-.255.213c.382.637.806 1.23 1.316 1.74a7.412 7.412 0 0 0 1.698 1.274l.085-.212c.17-.298.425-.552.764-.68.17-.085.34-.085.51-.085.34 0 .679.085 1.018.213.128.042.255.085.34.085.764.17 1.316.467 1.698.849.552.594.552 1.485.552 2.25v.212c0 .467 0 .934-.085 1.4-.255.977-1.061 1.656-2.038 1.656h-.212V33Zm-7.811-12.226c-.255 0-.552 0-.764.042-.213 0-.382.043-.51.043-.255 0-.467.042-.594.17-.212.212-.17.594-.128.848.68 3.736 3.1 6.963 6.538 8.66l.128.086c.636.297 2.122 1.019 3.099 1.019.424 0 .721-.128.806-.425.043-.085.043-.212.043-.34V29.18c0-.212 0-.467-.128-.636-.084-.213-.34-.34-.636-.425l-.383-.127c-.254-.085-.509-.17-.721-.17h-.043c-.254 0-.34.212-.424.51-.085.212-.17.466-.382.636a.91.91 0 0 1-.51.17c-.212 0-.467-.085-.679-.17-1.868-1.019-3.481-2.674-4.373-4.542a1.232 1.232 0 0 1-.127-.467c0-.297.212-.552.594-.764.043-.043.128-.043.213-.085.17-.043.51-.17.51-.255 0-.043 0-.127-.043-.212a2.82 2.82 0 0 1-.255-.85c0-.042 0-.127-.043-.17-.042-.212-.084-.466-.212-.594-.085-.17-.424-.254-.976-.254ZM25.125 20.773a.744.744 0 0 1-.721-.721c0-.425.34-.722.721-.722h3.057c.424 0 .722.34.722.722 0 .424-.34.721-.722.721h-3.057Z"></path><path d="M25.125 23.83a.715.715 0 0 1-.721-.722c0-.382.34-.721.721-.721h3.057c.212 0 .424.085.552.254.127.128.212.34.212.51 0 .382-.34.722-.722.722h-3.099v-.043Z"></path><path d="M30.05 32.49c-.467 0-.722-.424-.722-.806 0-.212.043-.425.17-.552a.685.685 0 0 1 .552-.255h.637c.254 0 .51-.212.51-.51V17.166a.516.516 0 0 0-.51-.51H20.583a.516.516 0 0 0-.51.51v.637c0 .467-.424.722-.806.722-.425 0-.807-.255-.807-.722v-.637c0-1.189.977-2.165 2.123-2.165h10.146c.552 0 1.104.212 1.486.637.382.424.637.934.594 1.528v13.16c0 1.19-.976 2.166-2.122 2.166h-.637Z"></path></g><defs>
                        <clipPath id="contactDetailIcon_svg__a"><path fill="#fff" transform="translate(15.149 15)" d="M0 0h17.703v18H0z"></path></clipPath></defs></svg>
                    <h6 style={{ width: '70%' }}>Get access to contact details</h6>
                </div>
                <br />
                <div style={{ display: 'flex', textAlign: "center", marginLeft: "10%" }}>
                    <svg viewBox="0 0 48 48" height='50' width='50' fill="none" xmlns="http://www.w3.org/2000/svg" alt="profileViewIcon" class="h-12 w-12 shrink-0"><rect width="48" height="48" rx="24" fill="#F3F8FF"></rect><path d="M33.07 28.83 31 26.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1-7.062-7.08 5 5 0 0 1 7.062 7.08Zm7.07 7.07a.999.999 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0l2.12 2.12a1.001 1.001 0 0 1 0 1.42Z" fill="#3995E0"></path></svg>
                    <h6 style={{ width: '70%' }}>Perform unlimited search</h6>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h6>Flat 60% off till 21 Nov</h6>
                    <button type="button" className="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                </div>

            </div>
        </div>

    </div>
}