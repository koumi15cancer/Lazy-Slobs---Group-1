import React, { Component } from 'react';


class Homepage extends Component {
// Homepage component
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }


    render() {
        return (
            <div id="bg-image">
                <div id="blankspace"></div>

                <div class="container homepage-text">
                    <h2 style={{color: "White", fontSize: "90px"}}>Welcome to</h2>
                    <h1 style={{color: "white", fontSize: "150px"}}>The Slobs</h1>
                </div>
                
                <span class="container" id="homepage-buttons">
                    <a href="add-reservation/0" class="btn btn-primary" id="button1" >Reservation</a>
                    <div style={{width: "25px", display: "inline-block"}}></div>
                    <a href="menu.html" class="btn btn-primary" id="button2">Menu</a>
                </span>
            </div>
        );
    }
}

export default Homepage;