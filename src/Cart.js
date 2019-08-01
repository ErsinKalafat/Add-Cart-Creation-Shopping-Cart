import React from 'react';
import Tasarim from './tasarim.module.scss';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h5> My Cart</h5>
                {this.props.myCart.map((gelen, key) =>
                    (<div key={key} className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <tr><img width={100} src={gelen.image} /></tr>
                                    <tr><button className={Tasarim.removebutton}>Remove</button></tr>
                                </td>
                                <td className={Tasarim.urunaciklamasi}>
                                    <tr>{gelen.name}</tr>
                                    <tr><b> {gelen.price} {gelen.currency}</b></tr>
                                </td>
                            </tr>
                        </table>
                    </div>))}
                <hr />
            </div>
        );
    }
}

export default Cart;
