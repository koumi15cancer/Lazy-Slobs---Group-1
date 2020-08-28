import React, { Component } from 'react';

class FooterComponent extends Component {
    // Footer component
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                 <footer className = "footer">
                    <span className="navbar-text">LazySLob Project</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;