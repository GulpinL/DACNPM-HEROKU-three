import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [ paymentMethod, setPaymentMethod ] = useState('Paypal');


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/orders');
    }

    useEffect(() => {
        if(!shippingAddress.address){
            navigate('/shipping');
        }
    })

    return (
    <div>
        <CheckoutSteps step1 step2 step3 />
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Payment</h1>
            </div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="paypal" 
                        value="Paypal" 
                        name="paymentMethod"
                        required
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></input>
                    <label htmlFor="paypal">Paypal</label>
                </div>
            </div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="momo" 
                        value="Momo" 
                        name="paymentMethod"
                        required
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></input>
                    <label htmlFor="momo">Momo</label>
                </div>
            </div>
            <div>
                <button className="primary" type="submit">Continue</button>
            </div>
        </form>
    </div>
  )
}
