// SimpleSlider-test.js
import React from 'react';
import Video from '../js/components/Video';
import ReactTestRenderer from 'react-test-renderer';
import {configure, shallow, mount, render} from 'enzyme';   

//describe('The home page app', () => {
   it('the app should have text', () => {
	   let videoData = {
			id: 'title1',
			title: 'Test Title 1',
			description: 'Title 1 Description',
			contents:[
				{
					url: "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
					format: "mp4",
					width: 640,
					height: 360,
					language: "en",
					duration: 3600000,
					geoLock: false,
					id: "vid_103"
				}
			]
	   }
		const app  = mount(<Video content={videoData} />);
		expect(app.find('.rh5v-DefaultPlayer_component').length).toEqual(1);
    });
//})