import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import  "./styles.css";
import Specialization from "./specialization";
class MainComponent extends Component{
    state={

    }

    render(){
        return(

            <div>
                <Switch>


                    <Route path="/Specialization" component={Specialization}/>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
                
            </div>
        );
    }

}
export default MainComponent;