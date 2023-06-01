import { useState } from 'react';
import { fakeData } from '../../fakeData';

const NavbarButton = ({ text, link, order, css, children, type }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasChildren = children && children.length > 0;
  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <div class="">
    <li class="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={link} class={`px-3 py-2 ${css}`}>
        {text}
      </a>
      {hasChildren && (
        <ul class={`fixed justify-center items-center text-[12px] text-white   ${isSubMenuOpen ? '' : 'hidden'}`}>
          {children.map((child) => (
            <li class="py-4 bg-sky-200">
              <a href={child.link} class={`px-3 py-2 ${child.css}`}>
              <NavbarButton key={child.order} {...child} className="bg-sky-500" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  </div>
  );
};
const Navbar = () => {
  return (
    <div>
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-lg">Talha</a>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {fakeData.map(item => (
                <NavbarButton key={item.order} {...item}  />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;

