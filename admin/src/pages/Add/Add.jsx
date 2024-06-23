import { assets } from "../../assets/assets"

 
const Add = () => {
  return (
    <div className="add w-3/4 ml-6 mt-12 text-[#6d6d6d] ">
      <form className="rijo gap-5 flex flex-col ">
        <div className="add-image-upload rijo flex flex-col gap-2.5">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="cloud image" className="w-28" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name rijo flex flex-col gap-2.5 max-w-[max(40%,280px)]">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="p-2.5 border rounded-sm"
          />
        </div>
        <div className="add-product-description rijo flex flex-col gap-2.5 max-w-[max(40%,280px)]">
          <p>Product description</p>
          <textarea
            name="description"
            rows={6}
            placeholder="Write content here"
            required
            className="p-2.5 border rounded-sm"
          ></textarea>
        </div>
        <div className="add category-price flex gap-7">
          <div className="add-category rijo flex flex-col gap-2.5">
            <p>Product category</p>
            <select
              name="category"
              className="max-w-28 p-2.5 border rounded-sm"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price rijo flex flex-col gap-2.5">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              className="max-w-28 p-2.5 border rounded-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn max-w-28 border-none p-2.5 bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add
