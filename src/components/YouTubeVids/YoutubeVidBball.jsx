import React from "react";
import YouTube from 'react-youtube';

class YoutubeBball extends React.Component {
    render() {
        const options = {
            height: '350',
            width: '500',
            playerVars: {
                autoplay: 0,
                controls: 1,
            },
        };

        return <YouTube videoId="3QJSbjZcxn4" opts={options} onReady={this._onReady} id="video"  />;
    }

    _onReady(event){
        event.target.pauseVideo();
    }
}

export default YoutubeBball;