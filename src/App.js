import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, HashRouter } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Naslovna from "./pages/Naslovna";
import Footer from "./parts/Footer";
import Istorijat from "./pages/Istorijat";
import Galerija from "./pages/Galerija";
import Registracija from "./pages/Registracija";
import './main.css';

class App extends Component {
  render() {
  return (
  <div className="App">
      <HashRouter>
			<div className="container2">
				<div className="row">
				<h1>FK CRVENA ZVEZDA</h1>
				<img src="../slike/logo1.png"/>
				</div>
			</div>
		<Navbar />
		<Route path="/naslovna" component={Naslovna}/>
		<Route path="/istorijat" component={Istorijat}/>
		<Route path="/galerija" component={Galerija}/>
		<Route path="/registracija" component={Registracija}/>
		<Footer />
      </HashRouter>
    </div>
  );
}
}
export default App;
