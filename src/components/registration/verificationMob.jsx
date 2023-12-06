import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas';
import { motion } from "framer-motion";



function VerificationMob(){
    const [showPass,setShowPass] = useState(false);
    const [ShowInterest,setShowInterest] = useState(1);

    function handleShowPass(){
        showPass?setShowPass(false):setShowPass(true);
    }
    function handleInterest(val){
        setShowInterest(val)
    }
    
   

    return(
        <motion.div initial={{ x:1400 }} animate={{ x:0 }} transition={{ duration: 0.5 }}>
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page4"> <i className="allimages"></i></Link></span>
                <div className="">Login Details</div>
            </header>
            <div className="personalDetialsContainer">
                <div className="regBlockInput">
                    <div className="selectWid">
                        <div className="dateofbrth">Full Name</div>
                        <input type="text" className="inptFillForm" placeholder="Not Filled In"/>
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid2">
                        <div className="dateofbrth">Email</div>
                        <input type="text" className="inptFillForm"  placeholder="Not Filled In"/>
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="">
                        <div className="dateofbrth">Phone Number</div>
                        <div className="d-flex mt-2 pt-1">
                            <span>+</span>
                            <input type="text" className="slidermobNo sliderISD" value="91"/>
                            <span>-</span>
                            <input type="number" className="slidermobNo" placeholder="Not Filled In"/>
                        </div>
                        
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid3">
                        <div className="dateofbrth">Create New Password</div>
                        <input type={showPass?"text":"password"} className="inptFillForm"  placeholder="Not Filled In"/>
                        <span className="infoHint">Hint: Use 6 or more characters</span>
                    </div>
                    <span className="showHidePass" onClick={handleShowPass}>{showPass?"Hide":"Show"}</span>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid2">
                        <div className="dateofbrth">Contact Privacy Settings</div>
                        <div className="chipContainer">
                            <div className={ShowInterest==1?"highlightChip":""} onClick={()=>handleInterest(1)}>Show to all</div>
                            <div className={ShowInterest==2?"highlightChip":""} onClick={()=>handleInterest(2)}>Hide from all</div>
                            <div className={ShowInterest==3?"highlightChip":""} onClick={()=>handleInterest(3)}>Show to members I express interest in</div>
                        </div>
                        
                    </div>
                </div>
                <div className="termPrivy">Terms of Use Privacy Policy</div>
                


            </div>
            <div className={"btnForNext "}>
                <Link to="/registr/page5"><div>Accept & Continue</div></Link>
            </div>
        </motion.div>   
    );

}

export default VerificationMob;

