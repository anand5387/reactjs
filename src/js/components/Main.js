import React from 'react';
import s from '../../css/main.scss';
import vcss from '../../css/html5video.scss';


export default class Main extends React.Component {
	/* Main Wrapper Component used to handle the Navigation and Content */
	render() {
		return <div>
					{this.props.children}
				</div>;
	}
}