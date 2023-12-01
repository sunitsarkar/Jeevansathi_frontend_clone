import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas'



function CareerDatailsMob(){

    const [takeData,setTakeData] = useState({qualify:"",employee:"",annIncome:""});
   
    function handleData(title,value){
        if(title=="qualify")setTakeData({...takeData,qualify:value});
        if(title=="employee")setTakeData({...takeData,employee:value});
        if(title=="annIncome")setTakeData({...takeData,annIncome:value});
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
    let highDegrees = ["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"];
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];

    const {qualify,employee,annIncome}=takeData;

    return(
        <div className="">
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page1"> <i className="allimages"></i></Link></span>
                <div className="">Career Details</div>
            </header>
            <div className="personalDetialsContainer">
               
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#highestQualify" aria-controls="offcanvsasRight">
                    <div className="selectData">
                        <div className="dateofbrth">Highest Qualification</div>
                        <div className="notFillForm">{qualify?qualify:"Not Filled In"}</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#employeeIn" aria-controls="offcanvsasRight">
                    <div className="selectData">
                        <div className="dateofbrth">Employed In</div>
                        <div className="notFillForm">{employee?employee:"Not Filled In"}</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#annualIncome" aria-controls="offcanvsasRight">
                    <div className="selectData">
                        <div className="dateofbrth">Annual Income</div>
                        <div className="notFillForm">{annIncome?annIncome:"Not Filled In"}</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="highestQualify" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Highest Qualification",highDegrees,qualify,"qualify")}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="employeeIn" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Employed In",emped,employee,"employee")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="annualIncome" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Annual Income",incomeArr,annIncome,"annIncome")}
                </div>


            </div>
            <div className="btnForNext">
                <div>Next</div>
            </div>
        </div>
                 
    );

}

export default CareerDatailsMob;

