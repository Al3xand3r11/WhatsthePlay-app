import React from "react";
import YouTube from 'react-youtube';

class YoutubeClip extends React.Component {
    render() {
        const options = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,
                controls: 1,
            },
        };

        return <YouTube videoId="qTicW_jRCts" options={options} onReady={this._onReady} id="video"  />;
    }

    _onReady(event){
        event.target.pauseVideo();
    }
}

export default YoutubeClip;