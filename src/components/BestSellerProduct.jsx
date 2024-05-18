import { IoMdBookmarks } from "react-icons/io";
import RatingComp from "./RatingComp";

const BestSellerProduct = ({ item }) => {
  return (
    <>
      <div className=" flex justify-between">
        <div className="flex flex-col gap-2 w-[328px]">
          <p className=" text-xs font-semibold text-green-700 flex items-center gap-1">
            <IoMdBookmarks />
            PACKAGE
          </p>
          <p className=" text-base font-bold text-black-1">{item.title}</p>
          <RatingComp
            rating={item.rating}
            text_styles="text-xs font-normal text-custom-grey-4"
            star_size={16}
          />

          <p className=" flex items-center gap-2 text-xs">
            <span className=" text-black-1 font-bold">{item.price}</span>
            <span className="line-through text-custom-grey-4 font-normal">
              {item.ogPrice}
            </span>
            <span className=" size-1 rounded-full bg-custom-grey-4"></span>
            <span className="text-custom-grey-4 font-normal">{item.time}</span>
          </p>

          <div className="border-b border-dashed border-neutral-300 w-full"></div>

          <ul className="list-disc pl-4 flex flex-col gap-2">
            {item.details.map((d, i) => (
              <li key={i} className=" text-xs font-bold text-neutral-700">
                {d}
              </li>
            ))}
          </ul>

          <button className=" py-[6px] px-4 border border-custom-grey-3 rounded-lg text-black-1 font-semibold text-sm w-fit hover:bg-gray-200">
            Edit your package
          </button>
        </div>

        <button className=" self-start py-[6px] px-6 border-add-cart-color border rounded-lg shadow-lg text-add-cart-text font-semibold text-sm mt-8">
          Add{" "}
        </button>
      </div>
      <div className=" my-4 h-[1px] w-full bg-custom-grey-3"></div>
    </>
  );
};

export default BestSellerProduct;
