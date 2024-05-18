import { MdStars } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const RatingComp = ({ rating, text_styles, star_size }) => {
  return (
    <div className="flex gap-2 items-center">
      <MdStars size={star_size} className=" text-violet-800" />
      <span
        className={twMerge(
          " border-b border-dashed border-neutral-700 text-base",
          text_styles
        )}
      >
        {rating}
      </span>
    </div>
  );
};

export default RatingComp;
