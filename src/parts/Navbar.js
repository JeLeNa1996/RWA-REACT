import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="container1">
		<nav className="navbar">
		<ul>
			<li><a href="#naslovna">Naslovna</a></li>
			<li><a href="#istorijat">Istorijat</a></li>
			<li><a href="#galerija">Galerija</a></li>
			<li><a href="#registracija">Registracija</a></li>
		</ul>
		
	</nav>
	</div>
    );
  }
}
 
export default Navbar;