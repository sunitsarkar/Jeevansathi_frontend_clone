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

    const [country, setCountry] = useState(false);
    const [state, setState] = useState(false);
    const [highdegree, setHighdegree] = useState(false);
    const [emp, setEmp] = useState(false);
    const [AnalIncome, setAnalIncome] = useState(false);
    const [selectLang, setselectLang] = useState(false);

    function handleSelectLang(){
        selectLang?setselectLang(false):setselectLang(true);
    }
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina"," Kazakhstan","Algeria"];
   
    let highDegrees = ["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"];
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    

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
                                <input type="text" placeholder="" onClick={() =>{setCountry(true);setlabel1(true)}}/>
                                {label1 && country?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setCountry(false)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please mention the state</div>
                            <div className="regi-secle" >
                                <label className={"reg-label " +(label2?"reg-State":"")} onClick={() =>{setlabel2(true)}}>State<span className="star">*</span></label>
                                <input type="text" placeholder="" onClick={() =>{setState(true);setlabel2(true)}}/>
                                {label2 && state?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setState(false)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide a degree</div>
                            <div className="regi-secle" >
                                <label className={"reg-label " +(label3?"reg-HDegree":"")} onClick={() =>{setlabel3(true)}}>Highest Degree<span className="star">*</span></label> 
                                <input type="text" placeholder="" onClick={() =>{setHighdegree(true);setlabel3(true)}}/>
                                {label3 && highdegree?
                                <React.Fragment>
                                <div className={"highdegBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {highDegrees.map((h1,index)=><li onClick={() =>{setHighdegree(false)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide a Employe</div>
                            <div className="regi-secle" >
                                <label className={"reg-label " +(label4?"reg-emp":"")} onClick={() =>{setlabel4(true)}}>Employed In<span className="star">*</span></label> 
                                <input type="text" placeholder="" onClick={() =>{setEmp(true);setlabel4(true)}}/>
                                {label4 && emp?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setEmp(false)}}>{e1}</li>)}
                                        
                                    </ul> 
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please provide an Income range</div>
                            <div className="regi-secle" >
                                <label className={"reg-label " +(label5?"reg-Aicome":"")} onClick={() =>{setlabel5(true)}}>Annual Income<span className="star">*</span></label> 
                                <input type="text" placeholder="" onClick={() =>{setAnalIncome(true);setlabel5(true)}}/>
                                {label5 && AnalIncome?
                                <React.Fragment>
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {incomeArr.map((i1,index)=><li key={index} onClick={() =>{setAnalIncome(false)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                            
                    </div>
                </div>
                <div className="regi-info border-top mt-4">Here is your chance to make your profile stand out!</div>
                <div className="d-flex">   
                    <div className="reg-wid80 mb-5">
                        <div className="selectLang mb-2">
                            <div className="selLgWid">
                                <input type="checkbox" checked className="form-check-input" id="exampleCheck1"/>
                                <label className={"setLang "+(selectLang?"":"setLang2")} onClick={handleSelectLang}></label>
                                {selectLang?<span>Write in English</span>:<span>हिंदी में लिखें</span>}
                            </div>
                            <div className="selLgWid2">
                                {selectLang?<div>सहायता लें</div>:<div>Need help writing?</div>}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">Please write about yourself (Don't mention your name, number or social handles)</div>
                            <div className="regi-secle2" onClick={() =>{setlabel6(true)}}>
                                <label className={"reg-label " +(label6?"reg-expres":"")} onClick={() =>{setlabel6(true)}}>{selectLang?"अपने बारे  मैं लिखे":"Express Yourself!"}<span className="star">*</span></label>
                                {label6?
                                <React.Fragment>
                                    {selectLang?
                                        <textarea placeholder="आप नीचे दी गई चीजों के बारे में लिख सकते हैं:
                                        1. आपका व्यक्तित्व कैसा है?
                                        2. आप इन दिनों क्या काम कर रहे हैं?
                                        3. आप अपने खाली समय में क्या करना पसंद करते हैं?
                                        4. आपके परिवार में कौन-कौन हैं?
                                        5. आप किस प्रकार के साथी की तलाश में हैं?"></textarea>:
                                        <textarea placeholder="You may consider answering these questions:
                                        1. How would you describe yourself?
                                        2. What kind of food/movies/books/music you like?
                                        3. Do you enjoy activities like traveling, music, sports etc?
                                        4. Where have you lived most of your life till now?
                                        5. Where do you wish to settle down in future?"></textarea>}
                                </React.Fragment>
                                
                                    
                                :null}
                            </div>
                            <div className="extraTxt2">
                                <div>Introduce yourself (Don't mention your name, number or social handles). Write about your values, beliefs/goals and aspirations.                    How do you describe yourself? Your interests and hobbies. </div><br/>
                                <div>This text will be screened by our team.</div>
                            </div>
                        </div>
                        <Link to="/user_registration4"><button className="CmptRegiBtn">Complete Registration</button></Link>
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

