import React from 'react';

// list of projects URL and their names
var base_codepen_URL = "https://codepen.io/harvey56/";

var URL_R01 = "/ORPEQz";
var R01_name = "Markdown previewer";
var URL_R02 = "/ORvodg";
var R02_name = "Camper leaderboard";
var URL_R03 = "/ZpwKEz";
var R03_name = "Recipe box";
var URL_R04 = "/WoyVGZ";
var R04_name = "Game of Life";
var URL_D301 = "/QNPNYj";
var D301_name = "US GDP growth over time chart";
var URL_D302 = "/wWmAvG";
var D302_name = "Doping among cyclists chart";
var URL_D303 = "/xOzqPg";
var D303_name = "Global land surface temperatures over time chart";
var URL_API01 = "https://github.com/harvey56/timestamp_microservice";
var API01_name = "Timestamp microservice";
var URL_API02 = "https://github.com/harvey56/request-header-parser";
var API02_name = "Request header parser";
var URL_API03 = "https://github.com/harvey56/URL-shortener-service";
var API03_name = "URL shortener service";
var URL_API04 = "https://github.com/harvey56/image-search-layer";
var API04_name = "Image search layer";
var URL_JQ01 = "/vNYZMJ";
var JQ01_name = "Show the local weather";
var URL_JQ02 = "/yNmXYr";
var JQ02_name = "Random quote generator";
var URL_JQ03 = "/jbqxPy";
var JQ03_name = "Pomodoro clock";
var URL_JQ04 = "/GpEQKQ";
var JQ04_name = "Digital calculator";

var URL_W01_GH = "https://github.com/harvey56/votingapp";
var URL_W01_Full = "https://hidden-hollows-88799.herokuapp.com/";
var W01_name = "Voting App";

var URL_W02_Full = "https://stocktrackr56.herokuapp.com/";
var W02_name = "Stock Tracking App";

class PortfolioDetails extends React.Component{
	render(){
		return(
			<div className="card-columns">

			  <div className="card p-3">
			    <div className="card-body">
			      <h4 className="card-title alert alert-success" role="alert">{W02_name}</h4>
			      <p><span className = "font-weight-bold">Full stack </span>application that allows signed up users to record their stock transactions, track and chart any stock</p>
			      <code className = "code_bg">JS, React, Redux, NodeJS, ExpressJS, MongoDB, Bootstrap, HTML5, CSS3</code>
			      <div className = "text-center">
				      <a href = {URL_W02_Full} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
				  </div>
			    </div>
			  </div>

			  <div className="card">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_R04 + "/image/small.png"} alt="Card cap" />
			    <div className="card-body">
			      <h4 className="card-title">{R04_name}</h4>
			      <p className="card-text">This is one visualization of the Game of life, as defined by mathematician John Conway. You can select a grid size, run, pause and clear the game as you like</p>
			      <code className = "code_bg">JS, React, Bootstrap, HTML5, CSS3</code>
			      <div className = "text-center">
				      <a href = {base_codepen_URL + "full" + URL_R04} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
				      <a href = {base_codepen_URL + "pen" + URL_R04} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
				  </div>
			    </div>  
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_R01 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{R01_name}</h4>
				      <p className="card-text">This app allows you to view your Github flavored markdown text in a separate text area</p>
				      <code className = "code_bg">JS, React, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_R01} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_R01} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			      <div className="card-body">
				      <h4 className="card-title alert alert-success">{API04_name}</h4>
				      <p className="card-text">This app allows you to get the image URLs, alt text and page urls for a set of images relating to a given search string. It makes calls to Imgur's API</p>
				      <code className = "code_bg">JS, MongoDB, NodeJS, ExpressJS, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = "https://image-search-layer-56.herokuapp.com/" className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {URL_API04} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			      <div className="card-body">
				      <h4 className="card-title alert alert-success">{API03_name}</h4>
				      <p className="card-text">This allows you to pass a URL as a parameter and you will receive a shortened URL in the JSON response.</p>
				      <code className = "code_bg">JS, MongoDB, NodeJS, ExpressJS, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = "https://url-shortener-service-56.herokuapp.com/" className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {URL_API03} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			      <div className="card-body">
				      <h4 className="card-title alert alert-success">{API02_name}</h4>
				      <p className="card-text">This allows you to get the IP address, language and operating system for your browser.</p>
				      <code className = "code_bg">JS, MongoDB, NodeJS, ExpressJS, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = "https://request-header-parser-56.herokuapp.com/" className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {URL_API02} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			      <div className="card-body">
				      <h4 className="card-title alert alert-success">{API01_name}</h4>
				      <p className="card-text">You can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date</p>
				      <code className = "code_bg">JS, MongoDB, NodeJS, ExpressJS, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = "https://timestamp-microservice-56.herokuapp.com/" className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {URL_API01} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card">
			    <div className="card-body">
			      <h4 className="card-title alert alert-success" role="alert">{W01_name}</h4>
			      <p><span className = "font-weight-bold">Full stack </span>application that allows signed up users to create polls, and allows any user to view all polls as well as vote for any option given in the poll</p>
			      <code className = "code_bg">JS, React, Redux, NodeJS, ExpressJS, MongoDB, Bootstrap, HTML5, CSS3</code>
			      <div className = "text-center">
				      <a href = {URL_W01_Full} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
				      <a href = {URL_W01_GH} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
				  </div>
			    </div>
			  </div>			  

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_R03 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{R03_name}</h4>
				      <p className="card-text">This React app allows you to create and edit recipes, and add a list of ingredients to them</p>
				      <code className = "code_bg">JS, React, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_R03} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_R03} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_R02 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{R02_name}</h4>
				      <p className="card-text">This app shows you a table of users that can be sorted by their number of points, for a selected time span</p>
				      <code className = "code_bg">JS, React, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_R02} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_R02} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_D302 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{D302_name}</h4>
				      <p className="card-text">This D3 app shows you a scatterplot graph of cyclists performances</p>
				      <code className = "code_bg">JS, D3, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_D302} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_D302} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_D303 + "/image/small.png"} alt="Car cap" />
			      <div className="card-body">
				      <h4 className="card-title">{D303_name}</h4>
				      <p className="card-text">This D3 app shows you a heat map of land surface temperatures over time</p>
				      <code className = "code_bg">JS, D3, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_D303} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_D303} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_D301 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{D301_name}</h4>
				      <p className="card-text">This D3 app shows you a histogram of US GDP growth over time</p>
				      <code className = "code_bg">JS, D3, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_D301} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_D301} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>	

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_JQ01 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{JQ01_name}</h4>
				      <p className="card-text">This app shows the local weather condition based on your IP</p>
				      <code className = "code_bg">JS, jQuery, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_JQ01} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_JQ01} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_JQ02 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{JQ02_name}</h4>
				      <p className="card-text">This simple jQuery app randomly generates famous quotes</p>
				      <code className = "code_bg">JS, jQuery, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_JQ02} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_JQ02} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_JQ03 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{JQ03_name}</h4>
				      <p className="card-text">This is a pomodoro clock</p>
				      <code className = "code_bg">JS, jQuery, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_JQ03} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_JQ03} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>	

			  <div className="card p-3">
			    <img className="card-img-top" src={base_codepen_URL + "pen" + URL_JQ04 + "/image/small.png"} alt="Card cap" />
			      <div className="card-body">
				      <h4 className="card-title">{JQ04_name}</h4>
				      <p className="card-text">This is a calculator built with jQuery</p>
				      <code className = "code_bg">JS, jQuery, Bootstrap, HTML5, CSS3</code>
				      <div className = "text-center">
					      <a href = {base_codepen_URL + "full" + URL_JQ04} className = "btn btn-link active" role="button" aria-pressed="true">View App</a>
					      <a href = {base_codepen_URL + "pen" + URL_JQ04} className = "btn btn-link active" role="button" aria-pressed="true">View Code</a>
					  </div>
				  </div>
			  </div>			  		  			  			  		  			  			  

			</div>
		)
	}
}

export default PortfolioDetails;