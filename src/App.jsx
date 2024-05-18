import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import NavBar from "./components/NavBar";
import LeftSection from "./components/LeftSection";
import Carousel from "./components/Carousel";
import { imgCarousel } from "./constants";
import Services from "./components/Services";
import Cart from "./components/Cart";
import MenuModal from "./components/MenuModal";
import { twMerge } from "tailwind-merge";
import { useCart } from "./context/CartContext";

const App = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [fix, setFix] = useState(false);
  const { cart, totalCartCost, totalConstNoDiscount } = useCart();

  function setFixedSideBar() {
    if (window.scrollY >= 640) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixedSideBar);
  return (
    <div>
      <NavBar />
      <div className=" hidden md:block">
        <div className=" grid grid-cols-[357px_872px] pl-36">
          <LeftSection fix={fix} />
          <div>
            <div className=" w-[872px] h-[500px]">
              <Carousel slides={imgCarousel} />
            </div>
            <div className=" mt-10 border border-transparent border-t-custom-grey-3 grid grid-cols-[514px_360px]">
              <Services />
              <div
                className={twMerge(
                  fix && "fixed top-3 right-[140px] w-[370px]"
                )}
              >
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className=" block md:hidden">
        <div className=" w-full">
          <Carousel slides={imgCarousel} />
        </div>
        <div className=" px-4">
          <LeftSection />
        </div>
        <div className=" my-4 h-2 w-full bg-gray-200"></div>
        <div className=" mt-10 border border-transparent border-t-custom-grey-3">
          <Services />
        </div>
      </div>

      {openMenuModal ? (
        <div
          onClick={() => setOpenMenuModal(false)}
          className=" bg-white px-4 py-2 rounded-full fixed bottom-8 left-1/2 text-black-1 font-bold cursor-pointer z-20"
        >
          X
        </div>
      ) : (
        <div
          onClick={() => setOpenMenuModal(true)}
          className="md:hidden bg-neutral-900 text-white flex items-center justify-center fixed bottom-24 left-[150px] rounded-3xl px-4 py-2 cursor-pointer"
        >
          <GiHamburgerMenu />{" "}
          <span className="text-sm font-semibold ml-[4px]">Menu</span>
        </div>
      )}

      {openMenuModal && (
        <div
          className=" md:hidden flex items-center justify-center fixed inset-0 z-10 bg-[rgba(0,0,0,0.5)]"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <MenuModal />
        </div>
      )}

      {cart.length > 0 && (
        <div className="md:hidden w-full fixed bottom-0 bg-white py-2 px-4 grid grid-cols-2 items-center border border-t-custom-grey">
          <div className=" font-semibold text-base">
            ₹{totalCartCost}{" "}
            <span className=" font-normal text-sm line-through text-custom-grey-4">
              ₹{totalConstNoDiscount}
            </span>
          </div>
          <div className=" py-[14px] px-4 rounded-lg font-semibold text-sm bg-add-cart-text text-white text-center">
            View Cart
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
