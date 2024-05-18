import cartBird from "../assets/cart-bird.png";
import CredComp from "./CredComp";
import quality from "../assets/quality.jpg";
import { useCart } from "../context/CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className=" p-8">
      <div className=" border border-custom-grey-3 rounded-md flex justify-center items-center flex-col gap-4 py-3">
        {cart.length > 0 ? (
          <CartItems />
        ) : (
          <>
            <img src={cartBird} />
            <p className=" text-neutral-500">No items in your cart</p>
          </>
        )}
      </div>

      <CredComp />

      <div className="flex border border-custom-grey-3 rounded-md justify-center items-center gap-4 py-3 mt-4">
        <div className="flex flex-col gap-2">
          <h4 className=" font-semibold text-xl">UC Promise</h4>
          <p className=" font-normal text-sm">✓ Verified Professional</p>
          <p className=" font-normal text-sm">✓ Hassle Free Booking</p>
          <p className=" font-normal text-sm">✓ Transparent pricing</p>
        </div>
        <img src={quality} />
      </div>
    </div>
  );
};

export default Cart;
