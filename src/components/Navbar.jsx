import { fakeData } from '../../fakeData';
import NavbarButton from './NavbarButton';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("click :" + isOpen)
  }
  return (
    <div>
    <nav className="bg-gradient-to-r from-yellow-300  to-blue-600">
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

 {/* <div className="md:hidden flex items-center mr-3 text-yellow-300">
            <button onClick={handleMenuClick} className='bg-none'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
        <div className={`md:hidden overflow-hidden top-20 right-0 transform ${isOpen ? 'animate-slowOpen' : ''} transition-transform duration-300`} style={{position: 'absolute', zIndex: 2}}>
        
          <div className="py-4 right-60 bg-sky-400 ">
            <ul className="py-4">
              {fakeData.map(item => (
                <li className='py-4 relative'>

                  <NavbarButton key={item.order} {...item}  />
                </li>
              ))}
            </ul>
          </div>
          
          <div className="transition-all duration-500 ease-in-out transform origin-top ml-6">
              <svg className="w-6 h-6 text-gray-700 lg:hidden cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414l3.999 3.999a1 1 0 001.414 0l3.999-3.999a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
        </div>
      )} */}