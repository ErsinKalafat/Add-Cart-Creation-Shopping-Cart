import React from 'react';
import Tasarim from "./tasarim.module.scss";
import urun1 from "./images/urun1.png";
import urun2 from "./images/urun2.png";
import urun3 from "./images/urun3.png";

class Shopping extends React.Component {

    render() {

        return (
            <div>
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

export default Shopping;