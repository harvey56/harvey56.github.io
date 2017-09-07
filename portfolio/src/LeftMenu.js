import React from 'react';
//import id_photo from './images/id.jpg';
import './App.css';

class LeftMenu extends React.Component{
	render(){
		return(
			<div>
				<div className = "text-center">
					{/*<img className = "id_photo" src = {id_photo} alt = "id photo not loading, sorry" />*/}
				</div><br />
				
				<div className = "row">
					<p>I am a web developper qualified with the following technologies : </p><br />
					<p className = "technos_list">Javascript, HTML5, CSS3, Bootstrap, React, Redux, D3, jQuery, Node JS, MongoDB</p>
					<p>Browse my portfolio on the right for more details about the technologies I have experience with</p>
				</div>

				<div className = "row">
					<h4>Contact :</h4>
				</div>
				<div className = "row">
					 <ul className = "list">
					  <li><a href = "https://twitter.com/harvey_56">Twitter </a></li>
					  <li><a href = "https://github.com/harvey56"> GitHub </a></li>
					  <li>Email : hervel56 at gmail dot com</li>
					</ul> 
				</div>
			</div>
		)
	}
}

export default LeftMenu;