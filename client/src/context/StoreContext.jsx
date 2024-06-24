import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from "axios";
import config from "../config/config";

const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(null);
  const [food_list, setFoodList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${config.apiUrl}/api/food/list`);
    setFoodList(response.data.data);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFoodList();
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
      }
    }
    fetchData();
  }, []);
  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    setToken,
    token,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
