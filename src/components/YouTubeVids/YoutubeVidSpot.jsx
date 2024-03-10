import React from "react";
import YouTube from 'react-youtube';

class YoutubeSpotlight extends React.Component {
    render() {
        const options = {
            height: '350',
            width: '500',
            playerVars: {
                autoplay: 0,
                controls: 1,
            },
        };

        return <YouTube videoId="6yIr3vACPN0" opts={options} onReady={this._onReady} id="video"  />;
    }

    _onReady(event){
        event.target.pauseVideo();
    }
}

export default YoutubeSpotlight;