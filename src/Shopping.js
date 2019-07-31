import React from 'react';
import Tasarim from './tasarim.module.scss';
import urun1 from './images/urun1.png';
import urun2 from './images/urun2.png';
import urun3 from './images/urun3.png';
import axios from 'axios';

class Shopping extends React.Component {
    state = {
        urunler: [],
    };

    componentWillMount() {
        axios.get('https://nonchalant-fang.glitch.me/listing',).then(obj => {
            console.log(obj);
            this.setState({urunler: obj.data});
        });
    }

    render() {
        return (
            <div className={Tasarim.urunlistesi}>
            {this.state.urunler.map((gelen, id) =>
                    <div key={id} className={Tasarim.urun}>
                        <table className={Tasarim.urundizayn}>
                            <tr>
                                <td>
                                    <img width={100} src={gelen.image} />
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
                                    <input className={Tasarim.buton} type="submit" value="ADD BASKET"/>
                                </td>
                            </tr>

                        </table>
                    </div>)}
            </div>
        );

    }

}

export default Shopping;
