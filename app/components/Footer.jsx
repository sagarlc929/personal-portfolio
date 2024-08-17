import { FaHeart } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFreeCodeCamp } from "react-icons/fa";

const Footer = () =>{
  return(
    <footer id="footer" className="flex justify-evenly bg-main-gray border-t-4 border-main-red text-main-white p-4">
  <p>Crafted with <FaHeart className="text-red-500 inline"/> by Sagar Lamichhane
  using &nbsp; <a href="https://tailwindcss.com/" target="_blank" ><RiTailwindCssFill className="text-blue-500 text-2xl inline" /></a>&nbsp; <span className="text-red-500  inline items-center">&&</span> &nbsp; <a href="https://reactjs.org/" target="_blank"><FaReact className="text-blue-500 text-2xl inline animate-spin-slow " /></a></p>
<p>
  Design inspiration from &nbsp;
  <a href="https://www.freecodecamp.org/" className="group">
    <span className="hover:text-cyan-200 transition-all duration-300 ease-out m-0">
      freeCodeCamp
    </span> &nbsp;
    <FaFreeCodeCamp 
      className="inline text-2xl transition-all duration-300 ease-out group-hover:text-cyan-200"
    />
  </a>.
</p>
  </footer>
  );
}
export default Footer;
