import { bestsellerProducts, pedicureProducts } from "../constants";
import BestSellerProduct from "./BestSellerProduct";
import PedicureProduct from "./PedicureProduct";

const Services = () => {
  return (
    <div className=" border border-transparent border-l-custom-grey-3 border-r-custom-grey-3 border-b-custom-grey-3 px-8 py-4">
      <h2 className=" text-black-1 text-2xl font-bold py-6">Bestsellers</h2>
      <div className=" flex flex-col gap-4">
        {bestsellerProducts.map((item) => (
          <BestSellerProduct key={item.id} item={item} />
        ))}
      </div>

      <div className=" my-4 h-2 w-full bg-custom-grey-3"></div>

      <h2 className=" text-black-1 text-2xl font-bold py-6">Pedicure</h2>
      <div className=" flex flex-col gap-4">
        {pedicureProducts.map((item) => (
          <PedicureProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
