import React from "react";
import YouTube from 'react-youtube';

class YoutubeClip extends React.Component {
    render() {
        const options = {
            height: '350',
            width: '500',
            playerVars: {
                autoplay: 0,
                controls: 1,
            },
        };

        return <YouTube videoId="xA9_q06dEc0" opts={options} onReady={this._onReady} id="video"  />;
    }

    _onReady(event){
        event.target.pauseVideo();
    }
}

export default YoutubeClip;