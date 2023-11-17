import React, { useState } from "react";
import cover from './.././../asset/cover-image.jpg'
import logo from './.././../asset/logo1.png'
import payment from './.././../asset/payment.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence,color, motion } from "framer-motion";
import './reg.css'
import axios from "axios";

export default function User_registration() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [accout, setAccout] = useState('')
    const [errors, setErrors] = useState({});

    const [show, setShow] = useState(false)
    const [e, setE] = useState(false)
    const [m, setM] = useState(false)
    const [p, setP] = useState(false)
    const [c, setC] = useState(false)

    if (email.trim() === '') {
        errors.email = '';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email address';
    }
    else {
        errors.email = ''
    }

    if (mobile.trim() === '') {
        errors.phone = '';
    } else if (!/^[789]\d{9}$/.test(mobile)) {
        errors.phone = 'Invalid phone number';
    }
    else {
        errors.phone = ''
    }
    

    const handelSubmit=()=>{
        axios.post('',{
            email:email,
            mobile:mobile,
            password:password
        })
    }

    //
    console.log(errors.email)
    console.log(errors.email)
    console.log(mobile)


    //

    return <div className="main-div-registration" style={{ marginRight: 0, paddingRight: 0 }}>
        <div className="cover" >
            <img src={cover} className="cover-image" />

            <div className="logo-container">
                <div style={{ height: '100%', backgroundColor: 'white' }}>
                    <img src={logo} style={{ background: 'white', marginTop: '20px' }} />
                </div>
                <div className="contact-detail" >
                    <p className="text-light">LIVE CHAT</p>
                    <p className="text-light">+91 1234567890(Toll Free)</p>
                </div>
            </div>

            <div className="logo-text">
                <p >Account details</p>
            </div>
        </div>
        <br />
        <h3 style={{ textAlign: 'center' }}>Welcome! Lets start your partner search with this sign up.</h3>
        <br />
        <div className="main ">
            <div className="child" id="first-child">
                <p><small style={{ float: "right", color: 'red' }}>mandatory<small style={{ color: 'red' }}>*</small></small></p>
                <br />
                <div>
                    <div style={{ width: '100%' }} onClick={() => { setE(true) }}>
                    {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
                        {
                            e ? <motion.p
                                initial={{ x: 0 }}
                                animate={{ x: -60 }}
                                transition={{ type: "spring", duration: 1.1 }}
                                id='title'
                            >
                                <p className="required" style={{ color: "black", display: 'inline' }}>Email</p>
                            </motion.p> : null
                        }
                        <input type="email" className="Credential" placeholder={!e ? 'Email*' : null} required onChange={(e) => { setEmail(e.target.value) }}/>
                        <br />
                    </div>
                    <br />
                    <div style={{ width: '100%' }}  onClick={(e) => { setShow(true); setM(true) }}>
                    {errors.phone && <span style={{color:'red'}}>{errors.phone}</span>}
                        {
                            m ? <motion.p
                                initial={{ x: 0 }}
                                animate={{ x: -60 }}
                                transition={{ type: "spring", duration: 1.3 }}
                                id='title'
                            >
                                <p className="required" style={{ color: "black", display: 'inline' }}>Phone</p>
                            </motion.p> : null
                        }

                        <input type="text" className="Credential" placeholder={!m ? 'Mobile*' : null} onChange={(e)=>{setMobile(e.target.value)}} />
                    </div>
                    {show ? <div id="message">
                        <p>Jeevansathi members who like your profile will  contact you on this phone number.</p>
                        <p ><b>verification</b> of this number is compulsory after your registration</p>
                    </div>
                        : null}
                </div>
                <br /><br />
                <br />
                <p><small style={{ float: "left", margin: "-10px 15px" }}>Contact privacy settings</small></p><br />
                <div>
                    <button type="button" className="btn btn-outline-secondary rounded-pill " style={{ margin: "0px 5px" }}>Show to all</button>
                    <button type="button" className="btn btn-outline-secondary rounded-pill" style={{ margin: "0px 5px" }}>Hide from all</button>
                    <button type="button" className="btn btn-outline-secondary rounded-pill" style={{ margin: "0px 5px" }}>Show to members i express interest in</button>
                </div>
                <br />
                <div onClick={() => setP(true)}>
                    {
                        p ? <motion.p
                            initial={{ x: 0 }}
                            animate={{ x: -120 }}
                            transition={{ type: "spring", duration: 1.3 }}
                            id='title'
                        >
                            <p className="required" style={{ color: "black", display: 'inline' }}>Create Password</p>
                        </motion.p> : null
                    }
                    <input placeholder={!p ? "create new password*" : null} required className="Credential" onClick={(e)=>{setPassword(e.target.value)}} />
                </div>
                <p><small style={{ float: "left" }}>note: Use 8 or more characters with letters(A-Z) & numbers(0-9)</small></p>
                <br />
                <div onClick={() => setC(true)}>
                    {
                        c ? <motion.p
                            initial={{ x: 0 }}
                            animate={{ x: -135 }}
                            transition={{ type: "spring", duration: 1.3 }}
                            id='title'
                        >
                            <p className="required" style={{ color: "black", display: 'inline' }}>Create Account For</p>
                        </motion.p> : null
                    }
                    <input placeholder={!c ? "Create Account For*" : null} className="Credential" onClick={(e)=>{setAccout(e.target.value)}} />
                </div>
                <br />
                <button type="button" className="btn btn-danger rounded" id="btn" onClick={handelSubmit}>Register Me</button>
                <p className="register-text" style={{ width: '55%' }}>By clicking on <span className="fs-6 text-dark register-text">'Register Me',</span> you confirm that you accept the <a className="fs-6 text-danger" href="#">'Terms of use'</a> and <a className="fs-6 text-danger" href="#">'Privacy Policy'</a> </p>

            </div>
            <div className="child" >
                <h5><u>WHY REGISTER</u></h5>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                    </svg>
                    <p>Lakhs of Genuine Profile</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                    </svg>
                    <p>Many verified by personal visit</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                    </svg>
                    <p>Secure and family </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <p>Strict Privacy Control</p>
                </div>

            </div>
        </div>
        <br /><br /><br /><br />
        <div className="footer">
            <div className="footer-child" style={{ width: '100%', height: '70px', backgroundColor: '#405765' }}>
                <div >
                    <p className="fs-5 text-light">+91 1234567890(Toll Free)</p>
                </div>
                <div className="company-logo-box">
                    <img src={payment} width={'100%'} />

                </div>
                <div className="company-logo-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                </div>

            </div>

            <div className="partner-container" style={{ height: '150px' }}>
                <div className="bg-white">
                    <div className="footer-List">
                        <div className="partnerList">
                            <div className="partnerSite">Partner Sites</div>
                            <div className="footerContainer">
                                <Slider {...settings}>
                                    <div className="headfoots acre"></div>
                                    <div className="headfoots nc"></div>
                                    <div className="headfoots ng"></div>
                                    <div className="headfoots shiksha"></div>
                                    <div className="headfoots mydala"></div>
                                    <div className="headfoots pb"></div>
                                    <div className="headfoots zomato"></div>
                                    <div className="headfoots meritn"></div>
                                    <div className="headfoots ambitionbox"></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: '50px', backgroundColor: '#e1e4e7' }}>
                <p style={{ textAlign: 'center', paddingTop: '10px' }}>All rights reserved © 2016 Jeevansathi Internet Services.</p>
            </div>

        </div>

    </div>
}