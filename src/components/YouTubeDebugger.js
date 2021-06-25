// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
constructor(props){
    super()
    this.state ={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
    this.handleClickBitrate = this.handleClickBitrate.bind(this);
    this.handleClickSimulate = this.handleClickSimulate.bind(this)

}

handleClickSimulate(){
    console.log('hello')
    this.setState({
        settings: Object.assign({}, this.state.settings, {
            video: Object.assign({}, this.state.settings.video,{
                resolution: '720p'
            })
        })
    })

}



handleClickBitrate (event) {
    console.log('hello')
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }





    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickBitrate}>Change bitrate</button>
                <button className= "resolution" onClick={this.handleClickSimulate}>Change Resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;