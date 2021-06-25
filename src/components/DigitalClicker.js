// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
constructor(){
    super()
    this.state ={
        timesClicked: 0
    }
}

handleClicked = ()=>{
    console.log('hello')
    const increase = this.state.timesClicked + 1
    this.setState({
        timesClicked: increase
    })

}



    
    render() {
        return (
            <div>
                <button onClick = {this.handleClicked}>{this.state.timesClicked}</button>
                {this.timesClicked}
            </div>
        );
    }
}

export default DigitalClicker;