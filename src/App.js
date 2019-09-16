import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componenets/Navbar';
import ProductList from './componenets/ProductList';
import Details from './componenets/Details';
import Cart from './componenets/Cart';
import Default from './componenets/Default';
import Modal from './componenets/Modal';

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route component={Default}></Route>
            </Switch>
            <Modal/>
        </React.Fragment>
    );
}

export default App;
