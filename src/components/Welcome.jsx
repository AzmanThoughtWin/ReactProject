import React, { Component } from 'react';

class Welcome extends Component{
    render() {
        return <h1 className="p1">Welcome {this.props.name} aka {this.props.heroName}</h1>
    }
}

export default Welcome;