import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-md navbar-light bg-light" id="navigation_bar">
                        <ul class="navbar-nav">
                            <a href="home" id="lazyslobs">Lazy Slobs</a>
                        </ul>
                        <ul class="navbar-nav navbar-right" id="home-navbar">
                            <li><a href="aboutus.html" class="navbar-text">About Us</a></li>
                            <li><a href="menu.html" class="navbar-text">Menu</a></li>
                            <li><a href="contact.html" class="navbar-text">Contact Us</a></li>
                            <li><a href="login.html" class="navbar-text">Log In</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;