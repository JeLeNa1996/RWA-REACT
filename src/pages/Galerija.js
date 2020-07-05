import React, { Component } from 'react';

class Galerija extends Component{
  onMouseOverHandler(e){
    e.target.style.transform="scale(1.1)"; 
  }

  onMouseLeaveHandler(e){
    e.target.style.transform="scale(1.0)"; 
  }
	render(){
	return(
		<section className="sekcija1" id="galerija">
			<br/>
			<h2>Galerija</h2>
				<figure>
					<img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda2.jpg"/>
				    <img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda3.jpg"/>
					<img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda4.jpg"/>
					<img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda5.jpg"/>
					<img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda6.jpg"/>
					<img onMouseOver={this.onMouseOverHandler} 
						 onMouseLeave={this.onMouseLeaveHandler} 
						 src="../slike/zvezda7.jpg"/>
				</figure>
		</section>
			)
		}
	}
export default Galerija;