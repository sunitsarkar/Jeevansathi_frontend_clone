import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer"


function ProfileDetails(){
    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);

    const [dateShow, setDate] = useState(false);
    const [monthShow, setMonth] = useState(false);
    const [yrsShow, setYrs] = useState(false);
    const [mothertong, setMothertong] = useState(false);
    const [relign, setRelign] = useState(false);
    const [matStatus, setmatStatus] = useState(false);




    let days = [];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let years = [];
    let date = new Date();
    let pastYear = date.getFullYear() - 20;
    for(let i=1;i<=30;i++) days.push(i);
    for(let j=pastYear-50;j<pastYear;j++) years.push(j);
    let langs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let religions=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let heights = [];
    for(let i=0;i<10;i++){
        heights.push(`4' 0" (1.22 mts)`)
    }
    
    console.log(heights);



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
                            <div className="reg-active">Profile Details</div>
                            <div>Career Details</div>
                            <div>Lifestyle & Family</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="register-wid">
                <div className="regi-info">Hi! You are joining the Best Matchmaking Experience.</div>
                <div className="pt-4 d-flex mt-2">
                    <div className="reg-wid80">
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide a valid Full Name</div>
                            <div className="regi-secle" onClick={() =>{setlabel1(true)}}>
                                <label className={"reg-label " +(label1?"reg-label2":"")}>Groom's Name <span className="star">*</span></label>
                                <input type="text" />
                                <div className="ext-opt">
                                    <span>Don't show my name</span>
                                    <i class="fa-solid fa-gear"></i>
                                    <ul>
                                        <li>Show my name to all</li>
                                        <li className="selectedOpt">Don't show my name <br/> ( You will not be able to see names of other members )</li>
                                            
                                    </ul>
                                </div>

                            </div>
                            <div className="extraTxt"> If you wish to hide your name from others, click on settings icon and choose the setting </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide date of birth</div>
                            <div className="regi-secle" onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label " +(label2?"reg-label3":"")}>Date of Birth<span className="star">*</span></label>
                                {label2?
                                <ul className="DOBSelected">
                                    <li onClick={() =>{setDate(true);setMonth(false);setYrs(false)}}>
                                        <div >Date 
                                            <i className="dropArrow"></i>
                                            <i className={dateShow?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>{setMonth(true);setDate(false);setYrs(false)}}>
                                        <div >Month 
                                            <i className="dropArrow"></i>
                                            <i className={monthShow?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>{setYrs(true);setDate(false);setMonth(false)}}>
                                        <div >Year 
                                            <i className="dropArrow"></i>
                                            <i className={yrsShow?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                </ul>:null}
                                <div className={dateShow?"daysBox":"daysBox2"}>
                                    <ul>
                                        {days.map((d1,index)=><li onClick={() =>{setDate(false)}} key={index}>{d1}</li>)}
                                    </ul>
                                </div>
                                <div className={monthShow?"monthsBox":"monthsBox2"}>
                                    <ul>
                                        {months.map((m1,index)=><li onClick={() =>{setMonth(false)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                                <div className={yrsShow?"yersBox":"yersBox2"}>
                                    <ul>
                                        {years.map((y1,index)=><li onClick={() =>{setYrs(false)}} key={index}>{y1}</li>)}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide mother tongue</div>
                            <div className="regi-secle" onClick={() =>{setlabel3(true);}}>
                                <label className={"reg-label " +(label3?"reg-label4":"")}>Mother tongue<span className="star">*</span></label>
                                {label3?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className="gridDropdown">
                                    <ul>
                                        {langs.map((l1,index)=><li onClick={() =>{setMothertong(false)}} key={index}>{l1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide religion</div>
                            <div className="regi-secle" onClick={() =>{setlabel4(true)}}>
                                <label className={"reg-label " +(label4?"reg-label5":"")}>Religion<span className="star">*</span></label>
                                {label4?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className={"religionBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {religions.map((r1,index)=><li onClick={() =>{setlabel4(false)}} key={index}>{r1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide marital status</div>
                            <div className="regi-secle" onClick={() =>{setlabel5(true)}}>
                                <label className={"reg-label " +(label5?"reg-label6":"")}>Marital status<span className="star">*</span></label>
                                {label5?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {mstatus.map((m1,index)=><li onClick={() =>{setlabel5(false)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide height</div>
                            <div className="regi-secle" onClick={() =>{setlabel6(true)}}>
                                <label className={"reg-label " +(label6?"reg-label7":"")}>Height<span className="star">*</span></label>
                                {label6?
                                <React.Fragment>
                                <input type="text" placeholder="Select"/>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {heights.map((h1,index)=><li onClick={() =>{setlabel6(false)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>

                        </div>
                            <Link to="/user_registration3"><button className="proBtns">Continue</button></Link>
                    </div>

                    <div className="reg-wid15">
                        <div className="wyregi"> why register </div>
                        <div>
                            <i className="reg-privacy privyIcon"></i>
                            <div className="pt-1">Lakhs of Genuine Profiles</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon2"></i>
                            <div className="pt-1">Many Verified by Personal Visit</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon3"></i>
                            <div className="pt-1">Secure &<br/> Family Friendly</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon4"></i>
                            <div className="pt-1">Strict <br/> Privacy Control</div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default ProfileDetails;

