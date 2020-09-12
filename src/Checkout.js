import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img src='https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/classifieds/5/4d/54d97033-a0bc-5c34-b950-f7ca5d0bc0a3/5f36ee2015fd5.preview.jpg?resize=1200%2C364' alt='' className='checkout-ad' />

                <div className='checkout-title'>
                    <h1>Your shopping basket</h1>
                </div>
            </div>

            <div className='checkout-right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
