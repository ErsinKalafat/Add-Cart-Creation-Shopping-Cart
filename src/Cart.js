import React from 'react';
import Tasarim from './tasarim.module.scss';

class Cart extends React.Component {
    render() {
        const count = this.props.myCart.map(cart => cart.display).length;
        return (
            <div>
                <h5 className={Tasarim.mycartbaslik}> My Cart ({count})</h5>
                {this.props.myCart.map((gelen, key) =>
                    (<div key={key} className={Tasarim.urun}>
                        <table>
                            <tr>
                                <td>
                                    <tr><img width={100} src={gelen.image} /></tr>
                                </td>
                                <td className={Tasarim.urunaciklamasi}>
                                    <tr>{gelen.name}</tr>
                                    <tr><b> {gelen.price} {gelen.currency}</b></tr>
                                </td>
                                <td><tr><button className={Tasarim.removebuton}
                                onClick={() => this.props.removeFromCart(gelen.id)}
                                >Remove</button></tr></td>
                            </tr>
                        </table>
                    </div>))}
                <hr />
            </div>
        );
    }
}

export default Cart;
