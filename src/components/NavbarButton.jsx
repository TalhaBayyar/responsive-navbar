import React, { useState } from 'react';

const NavbarButton = ({ text, link, order, css, children, type }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const renderButton = () => {
    switch (type) {
      case "mainButton":
        return (
          <a href={link} className={`px-3 py-2 bg-orange-500 ${css}`}>
            {text}
          </a>
        );
      case "parentButton":
        return (
          <button
            className={`px-3 py-2 bg-sky-500 relative  ${css}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {text}
          </button>
        );

        case "childButton2":
            return (
              <button
                className={`px-3 py-2 bg-sky-500 relative right-44 top-20   ${css}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {text}
              </button>
            );  
        
      case "childButton":
        return (
          <a href={link} className={`px-3 py-2 relative bg-orange-200 right-40 text-slate-700`}>
            {text}
          </a>
        );
      default:
        


        return null;
    }
  };

  return (
    <li className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {renderButton()}
      {hasChildren && (
        <ul className={`fixed justify-center items-center font-bold text-[12px] text-white ${isSubMenuOpen ? '' : 'hidden'}`}>
          {children.map((child) => (
            <li className=" ">
              <a href={child.link} className={`px-3 py-2 ${child.css}`}>
                <NavbarButton key={child.order} {...child} className="bg-sky-500" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarButton;
