import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas'



function UserRegisterMobile(){

    const [takeData,setTakeData] = useState({dob:"",height:"",country:"",state:""});
   
    function handleData(title,value){
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
        const {dob,height,country}=takeData;

        console.log(height);

    return(
        <div className="">
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
                            <div className="pinkFilter"></div>
                            <ul className="showDateUl">
                                {days.map((m1,index)=>(<li key={index}>{m1}</li>))}
                            </ul>
                        </div>
                        <div className="dobDiv">
                            <div className="pinkFilter"></div>
                            <ul className="showDateUl">
                                {months.map((m1,index)=>(<li key={index}>{m1}</li>))}
                            </ul>
                        </div>
                        <div className="dobDiv">
                            <div className="pinkFilter"></div>
                            <ul className="showDateUl">
                                {years.map((p1,index)=>(<li key={index}>{p1}</li>))}
                            </ul>
                        </div>
                    </div>
                    <buttom className="dobBtns">Done</buttom>
                    
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
        </div>
                 
    );

}

export default UserRegisterMobile;

