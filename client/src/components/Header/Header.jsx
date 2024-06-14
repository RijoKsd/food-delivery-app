 
const Header = () => {
  return (
    <div className="header h-[34vw] my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] bottom-[10%] left-[6vw] w-3/6 animate-fadeIn">
        <h2 className="text-white font-medium text-6xl">
          Order your favorite food here
        </h2>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience,one delicious meal at a time.
        </p>
        <button className="text-lightGray font-medium py-[1vw] px-[2.3vw] bg-white text-[1vw] rounded-[50px]">View Menu</button>
      </div>
    </div>
  );
}

export default Header
