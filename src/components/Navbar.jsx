import NavbarButton from './NavbarButton';
import { useState } from 'react';
import { fakeData } from './fakeData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <a href="#" className="text-white font-bold text-2xl italiana">Talha</a>
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4 ">
                {fakeData.map(item => (
                  <NavbarButton key={item.order} {...item}  />
                ))}
              </ul>
            </div>
            <div className="text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
            </div>
            {/* Mobile nav */}
            <ul className={` md:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-xl fixed w-full top-16 overflow-y-auto bottom-0 py-0 pl-2
              duration-500 ${isOpen ? "left-0" : "left-[-100%]"}`} >
              <li>
                {fakeData.map(item => (
                  <NavbarButton key={item.order} {...item}  />
                ))}
              </li> 
            </ul>  
            {/* Mobile menus */}        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

