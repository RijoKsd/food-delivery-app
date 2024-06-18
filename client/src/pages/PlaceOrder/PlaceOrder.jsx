import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order flex items-start justify-between gap-4 mt-24">
      <div className="place-order-left w-full max-w-[max(30%,500px)]   ">
        <p className="title text-3xl font-semibold mb-12">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-2.5 ">
          <input
            type="text"
            placeholder="First Name"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
        />
        <input
          type="text"
          placeholder="Street"
          className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
        />

        <div className="multi-fields flex gap-2.5 ">
          <input
            type="text"
            placeholder="City"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
          <input
            type="text"
            placeholder="State"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
        </div>
        <div className="multi-fields flex gap-2.5 ">
          <input
            type="text"
            placeholder="Zip Code"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
          <input
            type="text"
            placeholder="Country"
            className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="mb-4 w-full  p-2.5 border border-[#c5c5c5] rounded outline-tomato"
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-5 ">
          <h2 className="font-semibold text-xl">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 " />
            <div className="cart-total-details flex  justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5 " />
            <div className="cart-total-details flex justify-between text-[#555]">
              <strong>Total</strong>
              <strong>
                {" "}
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </strong>
            </div>
          </div>
          <button className="border-none bg-tomato text-white py-3 px-7 rounded cursor-pointer mt-4">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
