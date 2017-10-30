import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import keydown from 'react-keydown';
import Video from './Video';

@keydown
export default class SimpleSlider extends React.Component {
	constructor(props) {
		super(props);
		/* Bind Actions required for Keyboard actions */
		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
		/* Default settings provided for slider. Along with globally used responsive break points */
		this.state =  {
			currentVideo: {},
			loadCurrentVideo: false,
			settings: {
				centerMode: false,
				responsive: [
				  {
					breakpoint: 768,
					settings: {
					  arrows: true,
					  centerMode: false,
					  slidesToShow: 3,
					  slidesToScroll:3,
					  dots: false
					}
				  },
				  {
					breakpoint: 480,
					settings: {
					  arrows: true,
					  centerMode: false,
					  slidesToShow: 1,
					  slidesToScroll:1,
					  dots: false
					}
				  }
				],
				accessibility: true,
				dots: true,
				focusOnSelect: false,
				infinite: false,
				slideCount: this.props.videoData.length,
				slidesToShow: 5,
				slidesToScroll: 5,
				speed: 500,
				adaptiveHeight: false
			}
		};
	};

	/* Binded functions for Keyboard will be used to handle the Keyboard actions */
	next() {
		this.slider.slickNext()
	}
	previous() {
		this.slider.slickPrev()
	}
	/* Listener added for keydown events - Handle UP and DOWN key */
	componentWillReceiveProps( nextProps ) {
		const { keydown: { event } } = nextProps;
		if ( event && event.which === 38) {
			this.next();
		}

		if ( event && event.which === 40) {
			this.previous();
		}
	}

	loadVideo(video){
    this.setState({
			currentVideo: video,
			loadCurrentVideo: true
		});
	}
	
	backToList() {
		this.setState({
			currentVideo: {},
			loadCurrentVideo: false
		});
	}

	render() {
		let videos = this.props.videoData;
		/* 
			Until Data available for Middleware Loading state will be maintained 
			Error state of videos also can be handled here.
		*/
		if (!videos || videos.length === 0) {
			return <div>Loading videos ...</div>;
		}

		let slides = videos.map(video => {
			/*  Basic Template for Video Details added. 
					Video image added by default to avoid delay in network
					Able to replace the default.jpeg with actual image URL
					video.images[0].url
			*/
			return (
				<div class="holder" onClick={this.loadVideo.bind(this, video)} key={video.id.toString()} >
					<img alt={video.title} src="default.jpeg"/>
					{/*video.images[0].url*/}
					<p class="header"><strong>{video.title}</strong></p>
					<p class="text">{video.description}</p>
				</div>
			);
		});

		if(this.state.loadCurrentVideo) {
			/* 
				More description can be provided 
				i.e. Runtime, Director and Cinematography details,
				more description about that movie or video.
				For this task only shown Header and Video Content
				Button can be created as seperate re-usable component
				Error handling can be done for Actual PROD version 
					Like internet connectivity issue
					Slow network issue
					Loading cached the data.
			*/
			return (
				<div>
					<h1 class="text-center">{this.state.currentVideo.title}</h1>
					<div class="text-center back-button">
						<button id="backButton" class="btn btn-primary" onClick={this.backToList.bind(this)} type="button">Back</button>
					</div>
					<Video content={this.state.currentVideo} />
				</div>)
		} else {
			return (
				<div>
					<h1 class="text-center">Videos list</h1>
					<Slider ref={c => this.slider = c } {...this.state.settings}>
						{slides}
					</Slider>
				</div>
			);
		}
	}
}