import React from 'react';
import { Link } from 'react-router';
import config from '../config';
import SimpleSlider from '../components/SimpleSlider';
import VODService from '../services/VODService';

let vodService = new VODService(config.vodService.endpointUrl);

export default class SimpleSliderContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoData: []
		};
	}
	/* Service call triggered to get data from api/vidoes Middleware */
	componentDidMount() {
		vodService.getData()
		.then(videoData =>
			this.setState({
				videoData
			})
		).catch((error) => {
			console.log(error);
		});;
	}
	/* Render SimpleSlider once the Video Data available. */
	render() {
		return <SimpleSlider videoData={this.state.videoData}></SimpleSlider>;
	}
}