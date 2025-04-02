import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const [product, setProduct] = useState(null);
    const location=useLocation();
    const { totalprice, subtotal, item, productQuantity } = location.state|| {};
   

    // useEffect(() => {
    //     // Fetch product details from the checkout page
    //     const fetchProductDetails = async () => {
    //         try {
    //             const response = await axios.get('/api/checkout');
    //             setProduct(response.data);
    //         } catch (error) {
    //             console.error('Error fetching product details:', error);
    //         }
    //     };

    //     fetchProductDetails();
    // }, []);

    const loadRazorpay = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = displayRazorpay;
        document.body.appendChild(script);
    };

    const displayRazorpay = async () => {
        const {data} = await axios.post('http://localhost:3001/create-order', { amount: item.price });

        const options = {
            key: 'rzp_live_GcGnC4AkRptxDR',
            amount: data.amount,
            currency: 'INR',
            name: 'kazoma industries',
            description: 'Test Transaction',
            image: 'https://your-logo-url.com',
            order_id:data.id,
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: 'Your Name',
                email: 'your-email@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Your Address',
            },
            theme: {
                color: '#F37254',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div>
            <h1 className='w-full text-center'>payment</h1>
            {item ? (
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.name}</p>
                    <h2>Price: ₹{item.price}</h2>
                    <button onClick={loadRazorpay}>Pay with Razorpay</button>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default Payment;