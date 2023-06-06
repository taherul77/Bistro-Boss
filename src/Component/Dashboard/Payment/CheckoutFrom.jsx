import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckoutFrom = ({ cart, price }) => {
    console.log(price);

    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] =useAxiosSecure();
    const [cardError , setCardError]= useState('');

    const [clientSecret,SetClientSecret] =useState('');
    const {user} = useAuth();
const [processing , setProcessing] = useState(false);
const [transactionID , setTransactionID]=useState('');

    useEffect(()=>{
      if(price>0){
        axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
            console.log(res.data.clientSecret);
            SetClientSecret(res.data.clientSecret)
        })
      }

    },[price,axiosSecure])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }


        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
     
        console.log('card',card);

        const {error , paymentMethod} =await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            console.log('====================================');
            console.log('error',error);
            console.log('====================================');
            setCardError(error.message);
        }
        else{
            console.log('====================================');
            console.log('payment',paymentMethod);
            console.log('====================================');
            setCardError('');
        }
        setProcessing(true)
        const {paymentIntern,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous' 
                },

            }
        })
        if(confirmError){
            console.log(confirmError);
        }
        setProcessing(false)
       console.log(paymentIntern);
       if(paymentIntern.status === 'succeed'){
        setTransactionID(paymentIntern.id);
        const payment = {
            email: user?.email,
            transactionID: paymentIntern.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItem: cart.map(item=>item.menuItemId),
            status: 'service Pending',
            itemNames: cart.map(item => item.name)

        }
        axiosSecure.post('/payment', payment)
        .then(res =>{
            console.log(res.data);
            if(res.data.result.insertedID){
                //
            }
        })
        
       }

    }
  
  return (
   <div className="w-2/3 m-9">
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-[#D1A054]" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-600">{cardError}</p>
    }
    {
        transactionID && <p className="text-green-500">Transaction Complete with transactionID: {transactionID}</p>
    }
   </div>
  );
};

export default CheckoutFrom;
