import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : true
        }
    }
    

    render() {

        // ---------------FOURTH APPROCH (Short Circuit Operator)----------------
        return this.state.isLoggedIn && <div><h1>Welcome Azman</h1></div>


        //  --------------THIRD APPROCH (Ternary Conditon Operators)----------------
        // return(
        //     this.state.isLoggedIn ? (
        //         <h1>Welcome Azman</h1>
        //     ) : (
        //         <h1>Welcome Guest</h1>
        //     )
        // )


        //   -------------SECOND APPROCH (Element Variables)---------------
        // let message
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Azman</h1>
        // } else{
        //     message = <h1>Welcome Guest</h1>
        // }

        // return <div>{message}</div>


        //  -------------FIRST APPROCH (if/else)-----------------
        // if(this.state.isLoggedIn){
        //     return <div><h1>Welcome Azman</h1></div>
        // }else{
        //     return <div><h1>Welcome Guest</h1></div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Azman</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
