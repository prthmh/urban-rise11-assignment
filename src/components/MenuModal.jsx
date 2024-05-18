import { menuAry } from "../constants";
import MenuImgComp from "./MenuImgComp";

const MenuModal = () => {
  return (
    <div className=" bg-white rounded-xl">
      {" "}
      <div className="border border-custom-grey-3 rounded-lg p-5 flex flex-col gap-6">
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

export default MenuModal;
