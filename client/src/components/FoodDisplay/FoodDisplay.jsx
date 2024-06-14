import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem";

 
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
   return (
     <div id="food-display" className="food-display mt-8">
       <h2 className="text-2xl font-semibold">Top dishes near you</h2>
       <div className="food-display-list grid mt-4 p-8 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {food_list.map((item, index) => (
           <FoodItem key={index} {...item} />
         ))}
       </div>
     </div>
   );
}

export default FoodDisplay
