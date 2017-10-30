// SimpleSlider-test.js
import React from 'react';
import SimpleSlider from '../js/components/SimpleSlider';
import ReactTestRenderer from 'react-test-renderer';
import {configure, shallow, mount, render} from 'enzyme';   

//describe('The home page app', () => {
   it('the app should have text', () => {
	   let videoData = {
		   entries: [
			    {
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

				},
				{
					id: 'title2',
					title: 'Test Title 2',
					description: 'Title 2 Description',
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
					
				 },
				 {
					 id: 'title3',
					 title: 'Test Title 3',
					 description: 'Title 3 Description',
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
					 
				  },
				  {
					  id: 'title4',
					  title: 'Test Title 4',
					  description: 'Title 4 Description',
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
					  
				   },
				   {
					   id: 'title5',
					   title: 'Test Title 5',
					   description: 'Title 5 Description',
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
					   
					},
					{
						id: 'title6',
						title: 'Test Title 6',
						description: 'Title 6 Description',
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
	 
					 },
					 {
						 id: 'title7',
						 title: 'Test Title 7',
						 description: 'Title 7 Description',
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
						 
					  },
					  {
						  id: 'title8',
						  title: 'Test Title 8',
						  description: 'Title 8 Description',
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
						  
					   },
					   {
						   id: 'title9',
						   title: 'Test Title 9',
						   description: 'Title 9 Description',
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
						   
						},
						{
							id: 'title10',
							title: 'Test Title 10',
							description: 'Title 10 Description',
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
		   ]
	   }
 
		const app  = mount(<SimpleSlider videoData={videoData.entries} />);
		expect(app.find('.slick-slider').length).toEqual(1);
		expect(app.find('.slick-slide').length).toEqual(10);
		expect(app.find('.slick-active').length).toEqual(6);
		expect(app.find('button.slick-prev').length).toEqual(1);
		expect(app.find('button.slick-prev.slick-disabled').length).toEqual(1);
		expect(app.find('button.slick-next').length).toEqual(1);
		expect(app.find('button.slick-next.slick-disabled').length).toEqual(0);
		expect(app.find('.slick-active').first().children('p.header').text().trim()).toEqual('Test Title 1');
		expect(app.find('.slick-active').first().children('p.text').text().trim()).toEqual('Title 1 Description');
		expect(app.find('.slick-active').first().children('img').length).toEqual(1);
		app.find('button.slick-next').simulate('click');
		expect(app.find('.slick-active').first().children('p.header').text().trim()).toEqual('Test Title 6');
		expect(app.find('.slick-active').first().children('p.text').text().trim()).toEqual('Title 6 Description');
		expect(app.find('button.slick-prev.slick-disabled').length).toEqual(0);
		expect(app.find('button.slick-next.slick-disabled').length).toEqual(1);
		app.find('.slick-active').first().simulate('click');
		expect(app.find('button#backButton').length).toEqual(1);
		expect(app.find('button#backButton').text().trim()).toEqual('Back');
		expect(app.find('h1').text().trim()).toEqual('Test Title 6');
		expect(app.find('.rh5v-DefaultPlayer_component').length).toEqual(1);
		app.find('button#backButton').simulate('click');
	    expect(app.find('.slick-slider').length).toEqual(1);
    });
//})