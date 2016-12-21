import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ShoppingCart from './components/cart';



const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

//Welcome Container
ReactDOM.render(<App />,document.querySelector('.container'));

//Cart Container
ReactDOM.render(
    <ShoppingCart title={order.title} 
              image={order.image} 
              initialQty={order.initialQty}
              price={order.price}/>,
    document.querySelector('.cartcontainer')
);
