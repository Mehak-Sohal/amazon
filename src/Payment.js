import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

const Payment = () => {
    const [{ basket, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>Checkout (
                <Link to='/checkout'>{basket?.length} items</Link>)</h1>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p> 321 Bunchberry way</p>
                        <p>Toronto, ON</p>
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    
                    <div className='payment-items'>
                        {basket?.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                            ))}
                    </div>
                    
                </div>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
