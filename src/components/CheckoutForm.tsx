// /components/CheckoutForm.tsx
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

const CheckoutForm = ({ clientSecret, totalPrice }: { clientSecret: string; totalPrice: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe || !elements) return;
  }, [stripe, elements]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setErrorMessage(error.message || "Payment failed");
      } else if (paymentIntent?.status === "succeeded") {
        router.push("/thank-you"); // Redirect after successful payment
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <CardElement />
      <div className="flex justify-between">
        <span>Total Amount: ${totalPrice}</span>
      </div>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-md mt-4"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
