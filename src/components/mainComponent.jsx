import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./style.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registration";
import LandingPage from "./landing_page/landing-page";

class MainComponent extends Component{
    state={
    }
    
    render(){
        return(
            

            <div>
                <Switch>
                    <Route path="/user_registration" component={User_registration}/>
                    <Route path="/landing" component={LandingPage} />
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                
            </div>
        );
    }

}
export default MainComponent;