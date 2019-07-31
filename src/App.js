import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tasarim from './tasarim.module.scss';
import Cart from './Cart.js';
import Shopping from './Shopping.js';


class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className={Tasarim.ersinkalafat}>Ersin Kalafat - 0506 537 28 49</div>
                        <Link className={Tasarim.ustmenu} to="/shopping">Alışveriş</Link>
                        <Link className={Tasarim.ustmenu} to="/cart">My Cart</Link>
                    </div>
                    <br /><hr />
                    <div>
                        <Route path="/shopping" component={Shopping} />
                        <Route path="/cart" component={Cart} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

