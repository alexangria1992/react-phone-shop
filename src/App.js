import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from './components/Default';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/" component={ProductList}/>
  
          <Route component={Default}/>

        </Switch>
      </React.Fragment>
    )
  }




}


export default App;
