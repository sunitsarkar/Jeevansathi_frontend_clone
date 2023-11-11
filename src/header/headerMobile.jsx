import React, {Component} from "react";
import {Link} from "react-router-dom";
import BrowseContent from "./browseContent";

class HeaderMobile extends Component{
    state={showList:1,scrolled:null,}
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
    listenToScroll=()=>{
        let s1 = {...this.state};
        s1.scrolled = document.documentElement.scrollTop
        this.setState(s1);
        
      }
      handleView=(no)=>{
        let s1 = {...this.state};
        s1.showList=no;
        this.setState(s1);
    }
    render(){
        const{ showList,scrolled} = this.state;
        
        return(
        
            <div className="header--modifier text-white">
                <Link className="jeevansathi-logo--Mobile"to="#">
                    <img height="100%" width="100%"  src="https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo.svg"/>
                </Link>
            </div>
              
        );
    }

}
export default HeaderMobile;