import React from 'react';
import Tasarim from './tasarim.module.scss';
import axios from 'axios';

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urunler: [],
            cart: []
        };
    }

    componentWillMount() {
        axios.get('https://nonchalant-fang.glitch.me/listing',).then(obj => {
            console.log(obj);
            this.setState({urunler: obj.data});
        });
    }

    addToBasket = (deger) => {
        this.state.cart.push({
            id: deger
        });

        this.setState({
            cart: this.state.cart,
        });

        console.log(this.state.cart);
    };

    render() {
        return (
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
                                            onClick={() => this.addToBasket(gelen.id)}> ADD BASKET </button>

                                </td>
                            </tr>

                        </table>
                    </div>))}
            </div>
        );

    }

}

export default Shopping;
