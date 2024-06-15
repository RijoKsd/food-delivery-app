import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 p-5 pt-20 mt-20"
    >
      <div className="footer-content w-full gap-20 grid grid-cols-4">
        <div className="left col-span-2    flex flex-col items-start gap22">
          <img src={assets.logo} alt="logo" />
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            scelerisque, nunc ac egestas tempus, nisl purus pretium quam, a
            efficitur odio mi eu purus.
            <div className="social-icons flex justify-start items-center gap-5 mt-3">
              <img src={assets.facebook_icon} alt="facebook icon"  className="w-8"/>
              <img src={assets.twitter_icon} alt="twitter icon" className="w-8" />
              <img src={assets.linkedin_icon} alt="linkedin icon" className="w-8" />
            </div>
          </p>
        </div>
        <div className="center flex flex-col items-start gap:2">
          <h2 className="font-semibold text-xl border-b mb-2 text-white uppercase">Company</h2>
          <ul >
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery </li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="right flex flex-col items-start gap-2 ">
          <h2 className="font-semibold text-xl border-b mb-2 text-white uppercase">Get in touch</h2>
          <ul>
            <li>+91 1234345</li>
            <li>example@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr  className="w-full  my-2 bg-darkGray"/>
      <p className="copyright">
        Copyright 2024 &copy{" "}
        <a href="https://rijoksd.netlify.app" target="_blank">
          Rijo Sebastian
        </a>{" "}
        - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

