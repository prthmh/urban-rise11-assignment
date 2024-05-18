import RatingComp from "./RatingComp";

const PedicureProduct = ({ item }) => {
  return (
    <>
      <div className=" flex justify-between gap-3 relative">
        <div className="flex flex-col gap-2 w-[300px]">
          <p className=" text-base font-bold text-black-1">{item.title}</p>
          <RatingComp
            rating={item.rating}
            text_styles="text-xs font-normal text-custom-grey-4"
            star_size={16}
          />

          <p className=" flex items-center gap-2 text-xs">
            <span className=" text-black-1 font-bold">{item.price}</span>
            <span className=" size-1 rounded-full bg-custom-grey-4"></span>
            <span className="text-custom-grey-4 font-normal">{item.time}</span>
          </p>

          <div className="border-b border-dashed border-neutral-300 w-full"></div>

          <ul className="list-disc pl-4 flex flex-col gap-1">
            {item.details.map((d, i) => (
              <li key={i} className=" text-xs font-bold text-neutral-700">
                {d}
              </li>
            ))}
          </ul>

          <p className=" font-semibold text-sm text-add-cart-text cursor-pointer hover:opacity-55">
            View Details
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={item.img}
            alt={item.title}
            className=" object-contain size-[120px]"
          />
          <button className="py-[6px] px-6 w-fit border-add-cart-color border rounded-lg shadow-lg text-add-cart-text font-semibold text-sm bg-white relative bottom-4">
            Add{" "}
          </button>
        </div>
      </div>
      <div className=" my-4 h-[1px] w-full bg-custom-grey-3"></div>
    </>
  );
};

export default PedicureProduct;
