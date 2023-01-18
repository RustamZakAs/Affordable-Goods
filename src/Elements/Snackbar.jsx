import React, { Component } from 'react'

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

export default class Snackbar extends Component {
    
    componentDidMount() {
        let snackbar = document.createElement('div');
        snackbar.id = "snackbar";
        // snackbar.classList.add('show');
        document.body.appendChild(snackbar);
    }

    componentWillUnmount(){
        var x = document.getElementById("snackbar");
        if (x) document.body.removeChild(x);
    }

    render() {
        let { message } = {...this.props};
        return (
            <div>
                {/* <!-- Use a button to open the snackbar --> */}
                <button onclick="myFunction()">Show Snackbar</button>

                {/* <!-- The actual snackbar --> */}
                <div id="snackbar">{message}</div>
            </div>
        )
    }
}
