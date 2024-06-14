import { useState } from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item w-full m-auto rounded-2xl shadow animate-fadeIn">
      <div className="food-item-img-container relative ">
        <img src={image} alt={name} className="rounded-t-xl w-full" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            className="absolute bottom-3.5 right-3.5  w-8 rounded-full cursor-pointer"
          />
        ) : (
          <div className="absolute bottom-3.5 right-3.5  flex items-center gap-2.5 p-1.5 bg-white rounded-full">
            <img
              src={assets.remove_icon_red}
              alt="remove icon"
              onClick={() => setItemCount((prev) => prev - 1)}
              className="w-8 cursor-pointer"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="add icon"
              onClick={() => setItemCount((prev) => prev + 1)}
              className="w-8 cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-3">
        <div className="food-item-name-rating flex justify-between items-center mb-2.5">
          <p className="font-semibold text-lg">{name}</p>
          <img src={assets.rating_starts} alt="star" className="w-16" />
        </div>
        <div className="foot-item-desc text-darkGray text-sm">
          {description}
        </div>
        <p className="text-tomato font-medium text-xl my-2.5">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
