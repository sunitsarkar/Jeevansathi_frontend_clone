import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas'



function SocialDetails(){

    const [takeData,setTakeData] = useState({maritStatus:"",motherTongue:"",religCaste:""});
   
    function handleData(title,value){
        if(title=="maritStatus")setTakeData({...takeData,maritStatus:value});
        if(title=="motherTongue")setTakeData({...takeData,motherTongue:value});
        if(title=="religCaste")setTakeData({...takeData,religCaste:value});
    }

    function defiMultiInput(label,val){
        return(
            <React.Fragment>
                <div className="selectData">
                    <div className="dateofbrth">{label}</div>
                    <div className="notFillForm">{val?val:"Not Filled In"}</div>
                </div>
                <div className="iconContainer">
                    <i className="allimages rightArrow"></i>
                </div>
            </React.Fragment>
        )
    }
   
    function makeMultiToggle(title,arr,value,name){
        return(
            <div>
                <header className="personal-header">
                    <span className="leftIcon" > 
                        <i className="allimages" data-bs-dismiss="offcanvas" aria-label="Close"></i> 
                    </span>
                    <div className="">{title}</div>
                </header>
                <div className="divSlider">
                    <ul>
                        {arr.map((h1,index)=>
                            <li className={value==h1?"selectedVal":""} key={index} onClick={()=>{handleData(name,h1)}} data-bs-dismiss="offcanvas" aria-label="Close">{h1}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

    let langs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let religions=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    
    const {maritStatus,motherTongue,religCaste}=takeData;

    return(
        <div className="">
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page3"> <i className="allimages"></i></Link></span>
                <div className="">Social Details</div>
            </header>
            <div className="personalDetialsContainer">
               
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#highestQualify" aria-controls="offcanvsasRight">
                    {defiMultiInput("Marital Status",maritStatus)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#employeeIn" aria-controls="offcanvsasRight">
                    {defiMultiInput("Mother Tongue",motherTongue)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#annualIncome" aria-controls="offcanvsasRight">
                    {defiMultiInput("Religion-Caste",religCaste)}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="highestQualify" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Marital Status",mstatus,maritStatus,"maritStatus")}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="employeeIn" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Mother Tongue",langs,motherTongue,"motherTongue")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="annualIncome" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Religion-Caste",religions,religCaste,"religCaste")}
                </div>


            </div>
            <div className={"btnForNext "+(motherTongue&&motherTongue&&religCaste?"btnActive":"")}>
                <Link to="/registr/page5"><div>Next</div></Link>
            </div>
        </div>   
    );

}

export default SocialDetails;

