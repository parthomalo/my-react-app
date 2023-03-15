import React from 'react';
import './Home.css'
import Dark from '../Dark';
import Header from '../Header/Header';
import bag1 from '../../images/bags/bag-1.png'
import bag2 from '../../images/bags/bag-2.png'
import bag3 from '../../images/bags/bag-3.png'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Dark></Dark>
<h1 className='data'>This is home </h1>
            <div class="card">
                <img src={bag1} alt="Classic Black Leather Jacket"/>
                    <h2>Classic Black Leather Jacket</h2>
                    <p class="price">$249.99</p>
                    <p>Made from high-quality leather, this classic black jacket is a wardrobe staple. Featuring a tailored fit, zippered pockets, and a sleek design, it's perfect for any occasion.</p>
                    <button>Add to Cart</button>
            </div>

            <div class="card">
                <img src={bag2} alt="Wireless Noise-Cancelling Headphones"/>
                    <h2>Wireless Noise-Cancelling Headphones</h2>
                    <p class="price">$179.99</p>
                    <p>These wireless headphones use advanced noise-cancelling technology to provide crystal-clear sound. With a comfortable over-ear design and up to 30 hours of battery life, they're perfect for long listening sessions.</p>
                    <button>Add to Cart</button>
            </div>

            <div class="card">
                <img src={bag3} alt="Organic Cotton T-Shirt"/>
                    <h2>Organic Cotton T-Shirt</h2>
                    <p class="price">$29.99</p>
                    <p>Made from 100% organic cotton, this t-shirt is soft, comfortable, and eco-friendly. It features a classic design and comes in a variety of colors, making it a versatile addition to any wardrobe.</p>
                    <button>Add to Cart</button>
            </div>

        </div>
    );
};

export default Home;