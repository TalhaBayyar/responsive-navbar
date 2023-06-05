import { useState } from "react";
const NavbarButton = ({ text, link,  css, children, type }) => {
  const hasChildren = children && children.length > 0;
  const [heading, setHeading] = useState("");
 
  return (
    <>
      <div>
        <div className='text-left md:cursor-pointer group'>
          <h1 className='py-7 justify-between items-center md:pr-0 pr-5 group' onClick={() => {heading !== text ? setHeading(text) : setHeading(""); }}>
            {
              type === 'mainButton' && (
                <a href={link} className={`px-2 py-2 italiana font-semibold ${css}`}>{text}
                  {
                    hasChildren && ( <ion-icon 
                      name={`${ heading === text ? "chevron-up" : "chevron-down" }`}></ion-icon>)
                  }      
                </a>
              )
            }
          </h1>
          {   
            hasChildren && (
              <div>
                <div className='absolute hidden group-hover:md:block hover:md:block '>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute  mt-1 bg-white rotate-45'></div>
                  </div>
                  <div className={`bg-white p-2 grid grid-cols-1 gap-4  rounded-xl shadow-xl `}>
                    {hasChildren && (children || []).map((child, index) => (
                      <div key={index} className="rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                        <h1 className='uppercase tracking-wider text-gray-500 font-medium text-[12px]'>{child.text}</h1>
                        {(child.parenChildren || []).map((slink, sindex) => (
                          <div key={sindex}>
                            <a href={slink.link} className='text-sm ml-2 hover:opacity-60'>
                              {slink.text}
                            </a>
                            {(slink.childChildren || []).map((cc, ccIndex) => (
                              <div key={ccIndex}>
                                <a href={cc.link} className='text-xs ml-4 hover:opacity-60'>
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
        {/* Mobile menus */}  
        <div className={`${heading === text ? "md:hidden" : "hidden"} bg-gray-200`}>
          {  
            <div>
              {(children || []).map((child, index) => (
                <div key={index} className="rounded-lg mt-3 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                  <h1 className='uppercase tracking-wider text-gray-500 font-medium text-[12px] ml-4'>{child.text}</h1>
                  {(child.parenChildren || []).map((childTwo, twoindex) => (
                    <div key={twoindex}>
                      <a href={childTwo.link} className='text-sm ml-6 hover:opacity-60 '>
                        {childTwo.text}
                      </a>
                      {(childTwo.childChildren || []).map((childThree, threeIndex) => (
                        <div key={threeIndex}>
                          <a href={childThree.link} className='text-xs ml-8 hover:opacity-60'>
                            {childThree.text}
                          </a>
                        </div>
                      ))
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>
          }    
        </div>  
        {/* Mobile menus */}  
      </div>
    </>
  );
};
export default NavbarButton;
