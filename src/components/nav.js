import React, { Component } from "react";

import history from "../history";



class Navigation extends Component {
    render() {
        return (
            <div class="navigation-wrapper">
                <div class="navigation-wrapper__title">
                    Gen Empire
                </div>

                <div class="navigation-wrapper__buttons">
                    <a className="navigation-wrapper__login">Login</a>

                    <a className="navigation-wrapper__signup" >Sign Up</a>

                    <a className="navigation-wrapper__featured-member" >Featured Members</a>

                    <a className="navigation-wrapper__cart" >Cart</a>
                </div>
            </div>
        )
    }
}

export default Navigation;