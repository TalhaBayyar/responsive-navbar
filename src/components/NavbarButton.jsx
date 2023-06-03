import React, { useState } from 'react';

const NavbarButton = ({ text, link, order, css, children, type, parenChildren }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <>
      <div>
        <div className='px-3 text-left md:cursor-pointer group'>
          <h1 className='py-7 justify-between items-center md:pr-0 pr-5 group'>
            {
              type === 'mainButton' && (
                <a href={link} className={`px-2 py-2  ${css}`}>
                  {text}
                </a>
              )
            }
          </h1>
          {   
            hasChildren && (
              <div>
                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                  <div className='py-3'>
                    <div className='w-2 h-2 left-3  absolute mt-1 bg-ra bg-white- rotate-45'></div>
                  </div>
                  <div className={`bg-slate-700  text-white p-5 grid grid-cols-3 gap-10  border-4`}>
                 {hasChildren && (children || []).map((child, index) => (
  <div key={index}>
    <h1 className='text-sm  my-2.5'>{child.text}</h1>
    {(child.parenChildren || []).map((slink, sindex) => (
      <div key={sindex}>
        <a href={slink.link}>
          {slink.text}
        </a>
        {(slink.childChildren || []).map((cc, ccIndex) => (
          <div key={ccIndex}>
            <a href={cc.link}>
              {cc.text}
            </a>
          </div>
        ))}
      </div>
    ))}
  </div>
))}

                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default NavbarButton;
