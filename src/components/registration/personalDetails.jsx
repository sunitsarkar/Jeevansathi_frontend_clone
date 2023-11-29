import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import OffCanvas from '../offcanvas/off-canvas'


function UserRegisterMobile(){

    return(
        <div className="">
            <header className="personal-header">
                <span className="leftIcon"> <i className="allimages"></i> </span>
                <div className="">Personal Details</div>
            </header>
            <div className="personalDetialsContainer">
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#dateOfBirth" aria-controls="offcanvsasRight">
                    <div className="selectData">
                        <div className="dateofbrth">Date of birth</div>
                        <div className="notFillForm">Not Filled In</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvsasRight">
                    <div className="selectData">
                        <div className="dateofbrth">Height</div>
                        <div className="notFillForm">Not Filled In</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>
                <div className="regBlockSlider">
                    <div className="selectData">
                        <div className="dateofbrth">Country living in</div>
                        <div className="notFillForm">Not Filled In</div>
                    </div>
                    <div className="iconContainer">
                        <i className="allimages rightArrow"></i>
                    </div>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="dateOfBirth" aria-labelledby="offcanvasRightLabel">
                    <header className="personal-header">
                        <span className="leftIcon" > <i className="allimages" data-bs-dismiss="offcanvas" aria-label="Close"></i> </span>
                        <div className="">Date of birth</div>
                    </header>
                        
                    <h1>hello</h1>
                </div>
                
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <h1>not</h1>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <h1>word</h1>
                </div>


            </div>
            <div className="btnForNext">
                <div>Next</div>
            </div>
        </div>
                 
    );

}

export default UserRegisterMobile;

