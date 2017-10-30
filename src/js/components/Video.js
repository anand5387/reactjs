import React from 'react';
import { DefaultPlayer as VideoPlayer } from 'react-html5video';

export default class Video extends React.Component {
	/* Video Component used to load the video Content. */
	render() {
		let video = this.props.content;
		return <div>
					<VideoPlayer loop muted
						poster="default.jpeg"
						controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
						<source src={video.contents[0].url} type="video/mp4" />
					</VideoPlayer>
			   </div>;
	}
}