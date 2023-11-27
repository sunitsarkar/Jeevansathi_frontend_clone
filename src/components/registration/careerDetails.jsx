import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer"


function CareerDetails(){
    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);

    
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina"," Kazakhstan","Algeria"];
   
    let highDegrees = ["BBA","BMS","BFA","BEM","","","","","","","","","","","","","","","","","","","","","","","",""];

    
    



    return(
        <div className="proDetailBg">
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className="ml-2"><img src="https://www.jeevansathi.com/images/jspc/commonimg/logo1.png" /></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div>

                    <div className="proSection">
                        <div className="proSText">
                            <div>Profile Details</div>
                            <div className="reg-active">Career Details</div>
                            <div>Lifestyle & Family</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="register-wid">
                <div className="regi-info">Great! You are about to complete your Jeevansathi profile.</div>
                <div className="pt-4 d-flex mt-2">
                    <div className="reg-wid80">
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide country</div>
                            <div className="regi-secle" onClick={() =>{setlabel1(true);}}>
                                <label className={"reg-label " +(label1?"reg-country":"")}>Country<span className="star">*</span></label>
                                {label1?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setlabel1(false)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please mention the City you are living in</div>
                            <div className="regi-secle" onClick={() =>{setlabel2(true);}}>
                                <label className={"reg-label " +(label2?"reg-City":"")}>City living in<span className="star">*</span></label>
                                {label2?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setlabel2(false)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide a degree</div>
                            <div className="regi-secle" onClick={() =>{setlabel3(true)}}>
                                <label className={"reg-label " +(label3?"reg-HDegree":"")}>Highest Degree<span className="star">*</span></label>
                                {label3?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {highDegrees.map((h1,index)=><li onClick={() =>{setlabel3(false)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>

                        </div>
                            <button className="proBtns">Continue</button>
                    </div>

                    
                    
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default CareerDetails;

