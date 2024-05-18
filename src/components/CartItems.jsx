import { useCart } from "../context/CartContext";

const CartItems = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    totalCartCost,
    totalConstNoDiscount,
  } = useCart();

  return (
    <div>
      <h4 className=" text-xl font-semibold">Cart</h4>
      <div className="flex flex-col gap-5">
        {cart.map((c) => (
          <div key={c.id} className=" flex justify-between gap-7 w-full">
            <div className=" text-sm font-normal w-[15ch]">
              {c.item_details.title}
            </div>

            <div className=" flex items-center justify-center border-add-cart-color border rounded-lg text-add-cart-text font-semibold text-sm h-fit">
              <span
                className="text-xl hover:bg-[rgba(197,180,245,0.7)] px-2 overflow-hidden rounded-l-lg pb-1 cursor-pointer"
                onClick={() => removeFromCart(c.id)}
              >
                -
              </span>
              <span className="px-1">{c.qty}</span>
              <span
                className="text-xl hover:bg-[rgba(197,180,245,0.7)] px-2 overflow-hidden rounded-r-lg pb-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(c.item_details);
                }}
              >
                +
              </span>
            </div>

            <div className=" flex flex-col">
              <div className=" font-normal text-xs text-black-1">
                {c.item_details.price}
              </div>
              <div className="line-through text-custom-grey-4 font-normal text-xs">
                {c.item_details.ogPrice}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-add-cart-text text-white w-full flex justify-between items-center rounded-lg py-3 px-4 mt-6">
        <div className=" font-bold text-xs">
          ₹{totalCartCost}
          <span className=" font-normal line-through ml-1">
          ₹{totalConstNoDiscount}
          </span>
        </div>
        <div className="font-semibold text-sm">View Cart</div>
      </div>
    </div>
  );
};

export default CartItems;
