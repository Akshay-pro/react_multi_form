import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import  AppBar  from "material-ui/AppBar";

export class Success extends Component {
  
    render() {
       

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Succcessfully Submitted" />
                    <h1>Form Submission Successful</h1>
                    <small>Please check and verify your email</small>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}
export default Success
