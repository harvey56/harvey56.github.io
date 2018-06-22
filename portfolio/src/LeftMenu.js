import React from 'react';
import id_photo from './images/id.png';
import twitterIcon from './images/twitter.png';
import meetupIcon from './images/meetup.png';
import emailIcon from './images/email.png';
import githubIcon from './images/github.png';
import './App.css';

class LeftMenu extends React.Component{
	render(){
		return(
			<div className = "px-3">
				<div className = "text-center">
					<img className = "id_photo" src = {id_photo} alt = "oops, it's not loading, sorry" />
				</div><br />
				
				<div className = "row">
					<p>I am a web developper qualified with the following technologies : </p><br />
					<p className = "technos_list">Javascript, HTML5, CSS3, Bootstrap, React, Redux, D3, jQuery, Node JS, MongoDB</p>
					<p>Browse my portfolio on the right for more details about the technologies I have experience with</p>
				</div>
				<br />

				<div className = "row">
					<h4>Contact :</h4>
				</div>
				<br />
				<div className = "row">
					 <ul className = "list">
					  <li className = "d-inline mr-3"><a href = "https://twitter.com/harvey_56"><img className = "socialmediaicon" src = {twitterIcon} alt = "twitter icon not loading"/></a></li>
					  <li className = "d-inline mr-3"><a href = "https://github.com/harvey56"><img className = "socialmediaicon" src = {githubIcon} alt = "github icon not loading"/></a></li>
					  <li className = "d-inline mr-3"><a href = "https://www.meetup.com/members/53185552/"><img className = "socialmediaicon" src = {meetupIcon} alt = "meetup icon not loading"/></a></li>
					  <li className = "d-inline mr-3"><a href = "mailto: hervel56 @ gmail dot com"><img className = "socialmediaicon" src = {emailIcon} alt = "email icon not loading" /></a></li>
					</ul> 
				</div>
			</div>
		)
	}
}

export default LeftMenu;