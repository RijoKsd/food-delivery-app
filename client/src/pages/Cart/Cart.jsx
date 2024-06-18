import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { food_list, removeFromCart, cartItems } = useContext(StoreContext);
  return (
    <div className="cart mt-24">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-6 items-center text-darkGray">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item my-2.5 text-black grid grid-cols-6 items-center ">
                  <img src={item.image} alt={item.title} className="w-14" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer text-red-500">X</p>
                </div>
                <hr  className="bg-[#e2e2e2]  h-[1px] border-none"/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
