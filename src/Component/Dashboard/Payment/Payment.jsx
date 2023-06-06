import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment)
const Payment = () => {
    const [cart]= useCart();
    const total = cart.reduce((sum,item)=> sum+item.price,0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle SubHeading="PROCESS" heading="PAYMENT"></SectionTitle>
            <h2>Make Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckoutFrom price={price}></CheckoutFrom>
            </Elements>
            
        </div>
    );
};

export default Payment;