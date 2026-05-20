import Logo from '../assets/images/logo-light.svg';
import FaceBookIcon from '../assets/images/icon-facebook.svg';
import YouTubeIcon from '../assets/images/icon-youtube.svg';
import TwitterIcon from '../assets/images/icon-twitter.svg';
import PinterestIcon from '../assets/images/icon-pinterest.svg';
import InstagramIcon from '../assets/images/icon-instagram.svg';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  
  return (
    <footer className="bg-blue-950 text-white py-12 px-6 grid grid-cols-1 md:grid-cols-3 ">
      <div className="flex flex-col  items-center container mx-auto">
        <img src ={Logo}
          alt="Company Logo" />
          <div className="flex space-x-4 mb-8 mt-8 md:mt-20">
            <img src={FaceBookIcon} alt="Facebook Icon" />
            <img src={YouTubeIcon} alt="YouTube Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
            <img src={PinterestIcon} alt="Pinterest Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
          </div>
      </div>
      <nav className="flex flex-col text-center space-y-3 md:text-start md:flex-row md:justify-around ">
        <div className="flex flex-col space-y-3 md:space-y-7">
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-600 hover:text-green-400"}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-600 hover:text-green-400"}>Contact</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-600 hover:text-green-400"}>Blog</NavLink>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-7 ">
          <NavLink to="/careers" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-600 hover:text-green-400"}>Careers</NavLink>
          <NavLink  className="text-gray-600 hover:text-green-400">Support</NavLink>
          <NavLink  className="text-gray-600 hover:text-green-400">Privacy Policy</NavLink>
        </div>
      </nav>
      <div className="flex flex-col items-center mt-6 md:mt-0 md:items-end">
        <button className="bg-gradient-to-bl from-green-500 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white py-3 px-9 font-semibold text-base rounded-full shadow-md shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
        Request Invite
      </button>
        <div className="text-gray-600 mt-6 md:mt-15  text-sm ">
        © Digitalbank. All Rights Reserved
      </div>
      </div>
      
    </footer>
  );
}