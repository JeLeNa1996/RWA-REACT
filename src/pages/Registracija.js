import React, { Component } from "react";

class Registracija extends Component {
	
	constructor(props) {
    super(props);
    this.state = { 
		ime: "",
		prezime: "",
		mail: "",
		psw: "",
		text: "",
	};
	this.handleSubmit = this.handleSubmit.bind(this)
  }
   imeHandler = (event) => {
	   this.setState({
		   ime: event.target.value
	   })
   }
   prezimeHandler = (event) => {
	   this.setState({
		   prezime: event.target.value
	   })
   }
   mailHandler = (event) => {
	   this.setState({
		   mail: event.target.value
	   })
   }
   pswHandler = (event) => {
	   this.setState({
		   psw: event.target.value
	   })
   }
   textHandler = (event) => {
	   this.setState({
		   text: event.target.value
	   })
   }
handleSubmit = (event) => {
	if(!this.state.ime || !this.state.prezime || !this.state.mail || !this.state.psw || !this.state.text){
		alert("Popunite sva polja!");
		event.preventDefault();
	}
	else{
	alert("Registracija uspesna!")
	}
	this.setState({
		ime: "",
		prezime: "",
		mail: "",
		psw: "",
		text: "",
	})
	event.preventDefault();
}
  render() {
    return (
	<div className="background">
	<br/>
		<section className="sekcija2" id="registracija">
			<h2>Registracija</h2>
				<div className="container3">
					<form className="form"  onSubmit={this.handleSubmit}>
						<p>Ime:</p>
						<input type="text" value={this.state.ime} onChange={this.imeHandler} placeholder="Unesi ime" className="text"/>
						
						<p>Prezime:</p>  
						<input type="text" value={this.state.prezime} onChange={this.prezimeHandler} placeholder="Unesi prezime" className="text"/>
						
						<p>E-mail: </p>
						<input type="text" value={this.state.mail} onChange={this.mailHandler} placeholder="user@e-mail.com" className="text"/>
						
						<p>Sifra: </p>
						<input type="password" value={this.state.psw} onChange={this.pswHandler} placeholder="Kreiraj sifru" className="text"/> 
						
						<p>Godiste: </p>
						<select className="select" onChange={this.godisteHandler}>
							<option value="1991">1991</option>
							<option value="1992">1992</option>
							<option value="1993">1993</option>
							<option value="1994">1994</option>
							<option value="1995">1995</option>
							<option value="1996">1996</option>
							<option value="1997">1997</option>
							<option value="1998">1998</option>
							<option value="1999">1999</option>
							<option value="2000">2000</option>
							<option value="2001">2001</option>
							<option value="2002">2002</option>
							<option value="2003">2003</option>
							<option value="2004">2004</option>
							<option value="2005">2005</option>
							<option value="2006">2006</option>
							<option value="2007">2007</option>
							<option value="2008">2008</option>
							<option value="2009">2009</option>
							<option value="2010">2010</option>
						</select>
						<textarea rows="7" cols="50" value={this.state.text} onChange={this.textHandler}  placeholder="Dodatna poruka" className="textarea"></textarea>
						<input type="submit" name="submit" value="Registruj se" className="button"/>
					</form>
				</div>
		</section>
		<br/>
	</div>
    );
  }
}
export default Registracija;