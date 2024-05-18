const MenuImgComp = ({ imgSrc, caption }) => {
  return (
    <div className=" flex flex-col items-center h-[104px] ">
      <img src={imgSrc} className=" size-16 object-fill rounded-md" />
      <div className=" text-black-1 font-normal text-xs mt-2 text-center cursor-pointer hover:border-b-2 hover:border-b-black-1 transition duration-300 pb-2">
        {caption}
      </div>
    </div>
  );
};

export default MenuImgComp;
