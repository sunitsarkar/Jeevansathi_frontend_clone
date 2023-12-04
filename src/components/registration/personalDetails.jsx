import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas'
import { motion } from "framer-motion";



function UserRegisterMobile(){

    const [takeData,setTakeData] = useState({day:"",month:"",year:"",height:"",country:"",state:""});
   
    function handleData(title,value){
        if(title=="day")setTakeData({...takeData,day:value});
        if(title=="month")setTakeData({...takeData,month:value});
        if(title=="year")setTakeData({...takeData,year:value});
        if(title=="height")setTakeData({...takeData,height:value});
        if(title=="country")setTakeData({...takeData,country:value});
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
    
   
    let days = [];
    let years = [];
    for(let i=1;i<=31;i++) days.push(i);
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date = new Date();
    let pastYear = date.getFullYear() - 20;
    for(let j=pastYear-50;j<pastYear;j++) years.push(j);

    let heights = ["5' 0","5' 1","5' 2","5' 3","5' 4","5' 5","5' 6","5' 7","5' 8","5' 9","5' 10","5' 11"]
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina"," Kazakhstan","Algeria"];
    const {day,month,year,height,country}=takeData;
    let dob = day&&month&&year?day+" "+month+" "+year:"";


    return(
        <motion.div className="ssssasa" initial={{ width: "100%",x:"100vw" }} animate={{ width: "100%",x:0 }} transition={{ duration: 0.4 }}>
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page1"> <i className="allimages"></i></Link></span>
                <div className="">Personal Details</div>
            </header>
            <div className="personalDetialsContainer">
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#dateOfBirth" aria-controls="offcanvsasRight">
                    {defiMultiInput("Date of birth",dob)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#chooseHeight" aria-controls="offcanvsasRight">
                    {defiMultiInput("Height",height)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#chooseCountry" aria-controls="offcanvsasRight">
                    {defiMultiInput("Country living in",country)}
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="dateOfBirth" aria-labelledby="offcanvasRightLabel">
                    <header className="personal-header">
                        <span className="leftIcon" > <i className="allimages" data-bs-dismiss="offcanvas" aria-label="Close"></i> </span>
                        <div >Date of birth</div>
                    </header>
                    <div>
                        <div className="dobDiv">
                            <ul className="showDateUl">
                                {days.map((d1,index)=>(<li className={day==d1?"selectedVal mx-1":""} key={index} onClick={()=>{handleData("day",d1)}}>{d1}</li>))}
                            </ul>
                        </div>
                        <div className="dobDiv">
                            <ul className="showDateUl">
                                {months.map((m1,index)=>(<li className={month==m1?"selectedVal mx-1":""} key={index} onClick={()=>{handleData("month",m1)}}>{m1}</li>))}
                            </ul>
                        </div>
                        <div className="dobDiv">
                            <ul className="showDateUl">
                                {years.map((y1,index)=>(<li className={year==y1?"selectedVal mx-1":""} key={index} onClick={()=>{handleData("year",y1)}}>{y1}</li>))}
                            </ul>
                        </div>
                    </div>
                    <buttom className={"dobBtns "+(day&&month&&year?"dobBtns2":"")} data-bs-dismiss="offcanvas" aria-label="Close">Done</buttom>
                    
                </div>
                
                <div class="offcanvas offcanvas-end" tabindex="-1" id="chooseHeight" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Height",heights,height,"height")} 
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="chooseCountry" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Country living in",countries,country,"country")} 
                </div>


            </div>
            <div className={"btnForNext "+(dob&&height&&country?"btnActive":"")}>
                <Link to="/registr/page3"><div>Next</div></Link>
            </div>
        </motion.div>
                 
    );

}

export default UserRegisterMobile;


