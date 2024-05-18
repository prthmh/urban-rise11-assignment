import { MdStars } from "react-icons/md";
import { menuAry } from "../constants";
import MenuImgComp from "./MenuImgComp";
import RatingComp from "./RatingComp";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import cred from "../assets/cred.png";

const LeftSection = () => {
  const [fix, setFix] = useState(false);

  function setFixedSideBar() {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixedSideBar);
  return (
    <div className=" mt-9 md:mt-11 flex flex-col gap-10 md:pr-8 relative">
      <div className="flex flex-col gap-3">
        <h1 className=" text-2xl md:text-4xl text-black-1 font-bold md:font-semibold md:w-[15ch]">
          Salon Prime for kids & men
        </h1>
        <RatingComp
          rating="4.87 (5.4 M bookings)"
          text_styles="text-base"
          star_size={20}
        />

        <div className="block md:hidden w-[228px]">
          <div className="border border-custom-grey-3 rounded-md flex justify-center items-center gap-4 py-3 mt-4">
            <img src={cred} alt="cred" className=" rounded-lg size-8" />
            <div className=" flex flex-col">
              <p className=" text-black-1 font-bold text-xs">
                CRED cashback up to 1500
              </p>
              <p className=" text-custom-grey-dark font-normal text-xs">
                Cashback up to ₹500 via CRED
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          "border border-custom-grey-3 rounded-lg p-5 flex flex-col gap-6",
          fix && "md:fixed md:top-3 md:left-32 md:w-[330px]"
        )}
      >
        <div className="flex items-center">
          <div className=" text-xs font-semibold text-custom-grey-dark w-[24ch]">
            Select a service
          </div>
          <div className=" h-[0.5px] w-full bg-custom-grey-dark opacity-40"></div>
        </div>

        <div className=" grid grid-cols-3 items-center justify-center gap-y-8">
          {menuAry.map((item) => (
            <MenuImgComp
              key={item.id}
              imgSrc={item.img}
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
