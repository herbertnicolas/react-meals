import { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const [isActive, setIsActive] = useState(true);

    const cart_items = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item)=>{
                <li>
                    {item.name}
                </li>
            })}
        </ul>
    )

    const passOnClick = () => {
        setIsActive(false);
        console.log(isActive);
        return props.onPassing(isActive);
    }
   
    return(
        <Modal>
            {cart_items}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={passOnClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}   
export default Cart;

