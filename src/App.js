import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tasarim from './tasarim.module.scss';
import Cart from "./Cart.js";
import urun1 from './images/urun1.png';
import urun2 from './images/urun2.png';
import urun3 from './images/urun3.png';


class App extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <div>
                        <input className={Tasarim.mycartbuton} type="button" value="My Cart"/>
                        <div className={Tasarim.ersinkalafat} >Ersin Kalafat Hürriyet Emlak Case Study - 0506 537 28 49</div>
                    </div>
                </Router>


                <hr/>
                <div className={Tasarim.urunlistesi}>
                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun1}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Chevron Tempered Glass Guard for Lenovo K6 Power
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>

                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun2}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Kajal Sarees Printed Bhagalpuri Art Silk Sari
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>

                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun3}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Indian Polity 5 Edition
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun2}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Kajal Sarees Printed Bhagalpuri Art Silk Sari
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun1}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Chevron Tempered Glass Guard for Lenovo K6 Power
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img src={urun3}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={Tasarim.urunaciklamasi}>
                                    Indian Polity 5 Edition
                                </td>
                            </tr>
                            <tr className={Tasarim.altdizayn}>
                                <td>
                                    730 TL
                                </td>
                                <td>
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default App



