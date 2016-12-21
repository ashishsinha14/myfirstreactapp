import React from 'react';
import ReactDOM from 'react-dom';

export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qty: props.initialQty,
            total: 0
        };
    }
    componentWillMount(){
        this.recalculateTotal();
    }
    increaseQty(){
        this.setState({qty:this.state.qty+1},this.recalculateTotal);
    }
    decreaseQty(){
        let newQty = this.state.qty > 0 ? this.state.qty -1 : 0;
        this.setState({qty:newQty},this.recalculateTotal);
    }
    recalculateTotal(){
        this.setState({total:this.state.qty * this.props.price});
    }
    render() {
        return <article>
            <figure>
                <p>
                    <img src={this.props.image}/>
                </p>
                <figcaption>
                    <h2>{this.props.title}</h2>
                </figcaption>
            </figure>
            <p><strong>Quantity: {this.state.qty}</strong></p>

            <p>
                <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
                <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
            </p>

            <p><strong>Price per item:</strong> ${this.props.price}</p>

            <h3>
            Total: ${this.state.total}
        </h3>

    </article>;
    }
}

ShoppingCart.propTypes = {
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    initialQty: React.PropTypes.number
};
ShoppingCart.defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 0
};