import React from "react";
import YouTube from 'react-youtube';

class YoutubeSpotlight extends React.Component {
    render() {
        const options = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,
                controls: 1,
            },
        };

        return <YouTube videoId="6yIr3vACPN0" options={options} onReady={this._onReady} id="video"  />;
    }

    _onReady(event){
        event.target.pauseVideo();
    }
}

export default YoutubeSpotlight;