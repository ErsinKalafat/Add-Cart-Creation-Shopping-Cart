import React from 'react';
import Tasarim from './tasarim.module.scss';
import Axios from 'axios';
import Cart from './Cart';

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urunler: [],
            cart: []
        };
    }

    componentWillMount() {
        Axios.get('https://nonchalant-fang.glitch.me/listing',).then(obj => {
            console.log(obj);
            this.setState({urunler: obj.data});
        });
    }

    addToCart = (id, isim, resim, fiyat, kur) => {
        if (id !== 3) {
            this.state.cart.push({
                id: id,
                name: isim,
                image: resim,
                price: fiyat,
                currency: kur
            });

            this.setState({
                cart: this.state.cart,
            });
        }else {
            alert('Malesef ürün stoklarda mevcut değil :(');
        }

    };

    removeFromCart = (sil) => {
        const yeniSepet = this.state.cart.filter(urun => urun.id !== sil);
        this.setState({cart: yeniSepet});
    };


    render() {
        return (
            <div>
                <div>
                    <Cart myCart={this.state.cart} removeFromCart={this.removeFromCart}/>
                </div>

                <div className={Tasarim.urunlistesi}>
                    {this.state.urunler.map((gelen, key) =>
                        (<div key={key} className={Tasarim.urun}>
                            <table className={Tasarim.urundizayn}>
                                <tr>
                                    <td>
                                        <img width={100} src={gelen.image}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={Tasarim.urunaciklamasi}>
                                        {gelen.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {gelen.price} {gelen.currency}
                                    </td>
                                    <td>
                                        <button className={Tasarim.buton} type="submit"
                                                onClick={() => this.addToCart(gelen.id, gelen.name, gelen.image, gelen.price, gelen.currency)}>
                                            ADD BASKET
                                        </button>
                                    </td>
                                </tr>

                            </table>
                        </div>))}
                </div>
            </div>

        );
    }
}

export default Shopping;
