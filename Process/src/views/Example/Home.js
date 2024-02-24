import React from "react";
import Color from "../HOC/Color";
import myLogo from '../../assets/images/unnamed.png';

class Home extends React.Component {
    render() {
        return(
            <>
            <div>
                Hello World from Home Page with React &amp; me!
            </div>
            <div>
                <img src={myLogo} alt="" />
            </div>
            </>
        )
    }
}

export default Color(Home);