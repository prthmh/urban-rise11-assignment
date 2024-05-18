import { GrLocation } from "react-icons/gr";
import { IoChevronDownSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import urbancomp_logo from "../assets/urbancomp_logo.jpg";

const NavBar = () => {
  return (
    <div className=" hidden border border-transparent border-b-custom-grey bg-white pl-24 lg:pl-36 py-4 pr-6 md:flex items-center">
      <div className=" h-5/6">
        <img src={urbancomp_logo} alt="logo" className=" size-full" />
      </div>
      <div className=" flex items-center justify-center ml-28 border border-custom-grey-3 rounded-md p-3 gap-3">
        <GrLocation size={21} className=" text-custom-grey-dark" />
        <input
          placeholder="Connaught Place, New Delhi"
          className=" outline-none border-none lg:w-[210px] text-sm font-normal"
        />
        <IoChevronDownSharp size={24} className="text-custom-grey-dark" />
      </div>
      <div className=" flex items-center justify-center border border-custom-grey-3 rounded-md p-3 gap-3 ml-2">
        <FiSearch size={21} className=" text-custom-grey-dark" />
        <input
          placeholder="Search in Salon Prime for kids & men"
          className=" outline-none border-none lg:w-[310px] text-sm font-normal"
        />
      </div>
    </div>
  );
};

export default NavBar;
