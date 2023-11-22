import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registration";
import User_Login from "./../components/login/user_login";


class MainComponent extends Component{
    state={ }
    
    render(){
        return(
            

            <div>
                <Switch>
                    <Route path="/user_registration" component={User_registration}/>


                    <Route path="/login" component={User_Login}/>
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                
            </div>
        );
    }

}
export default MainComponent;