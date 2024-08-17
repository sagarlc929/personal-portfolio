import { navLinks } from '../constants';
import Link from 'next/link';
const Nav = () =>{
  return(
    <header>
      <nav className="bg-main-red flex justify-end fixed top-0 left-0 w-full shadow-xl z-10">
        <ul className="flex mr-2">
          {navLinks.map((item)=> (
            <li key={item.label} className="font-sans">
              <Link
                className="hover:bg-main-blue p-2 text-xl block text-main-white"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Nav;
