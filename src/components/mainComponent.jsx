import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registration";
import LandingPage from "./landing_page/landing-page";
import Details from "./profile_layout/profile_details";
import Settings from "./features/settings";
import User_Login from "./../components/login/user_login";
import profileDetails from "./../components/registration/profileDetails";
import CareerDetails from "./../components/registration/careerDetails";

class MainComponent extends Component{
    state={ }
    
    render(){
        return(
            

            <div>
                <Switch>
                
                    <Route path="/user_registration3" component={CareerDetails}/>
                    <Route path="/user_registration2" component={profileDetails}/>
                    <Route path="/user_registration" component={User_registration}/>
                    <Route path="/landing" component={LandingPage} />
                    <Route path="/profile_details" component={Details} />
                    <Route path="/settings" component={Settings}/>

                    <Route path="/login" component={User_Login}/>
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                
            </div>
        );
    }

}
export default MainComponent;