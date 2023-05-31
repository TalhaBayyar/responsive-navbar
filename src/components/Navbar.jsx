import React from 'react';
import { fakeData } from '../../fakeData';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("click :" + isOpen)
  }


  return (
    <header className=" cursor-pointer container mx-auto px-4 py-6 flex items-center justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <a href="#" className="font-bold text-white text-xl">
        Talha
      </a>
      <nav className=''>
        <nav className='hidden md:block'>
        <ul class="flex items-center justify-center font-semibold" style={{ color: fakeData.color }}>
          <li className='px-3 py-2'>{fakeData.anasayfa}</li>
          <li className="relative group px-3 py-2 ">
            <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
            {fakeData.title}
            </button>
            <div
              className="absolute sm:-left-44 top-3 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform"
            >
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[12px]">
                      {fakeData.hizmetlerimiz[0].title}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        {fakeData.hizmetlerimiz[0].subItems.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                      {fakeData.hizmetlerimiz[1].title} 
                      </p>
                      <ul className="mt-4 text-[15px]">
                        {fakeData.hizmetlerimiz[1].subItems.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {fakeData.hizmetlerimiz[1].additionalItems && (
                        <div>
                          <p className="mt-4 uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            {fakeData.hizmetlerimiz[1].additionalItems.title}
                          </p>
                          <ul className="text-[15px]">
                            {fakeData.hizmetlerimiz[1].additionalItems.subItems.map((item, index) => (
                              <li key={index}>
                                <a
                                  href={item.link}
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-3 py-2 relative group">
            <button class="hover:opacity-50 cursor-default" aria-haspopup="true">
              {fakeData.hakkimizda.title}
            </button>
            <div
              className="absolute sm:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform"
            >
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <ul className="mt-3 text-[15px]">
                        {fakeData.hakkimizda.subItems.slice(0, 4).map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                      {fakeData.hakkimizda.referanslarimiz.title}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>Geçmiş Referanslar</li>
                        {fakeData.hakkimizda.referanslarimiz.gecmisReferanslar.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                        <li>Gelecek Referanslar</li>
                        {fakeData.hakkimizda.referanslarimiz.gelecekReferanslar.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-3 py-2 relative group cursor-pointer">
            <a href="#" class="hover:opacity-50 cursor-default">
              {fakeData.iletisim}
            </a>
          </li>
          <li className="px-3 py-2 relative group cursor-pointer">
            <a href="#" class="hover:opacity-50 cursor-default">
              {fakeData.kayitOl}
            </a>
          </li>
        </ul>
        
        </nav>    
        <div className="flex items-center">
          <div className="md:hidden flex items-center mr-3">
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
        </div>
           
      </nav>
        
     
      {isOpen && (
        <div className={`block md:hidden top-28 right-20 w-80 h-80 animate-slowOpen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500`} style={{position: 'absolute', zIndex: 2}}>
        
          <nav className=''>
            <ul className="flex-col items-center justify-center font-semibold" style={{ color: fakeData.color }}>
              <li className='px-3 py-2'>{fakeData.anasayfa}</li>
              <li className="relative group px-3 py-2 ">
                <button className="hover:opacity-50 cursor-default " aria-haspopup="true">
                {fakeData.title}
                </button>
                <div
                  className="absolute right-36 top-3 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform"
                >
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10 ">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[12px] ">
                          {fakeData.hizmetlerimiz[0].title}
                          </p>
                          <ul className="mt-3 text-[15px]">
                            {fakeData.hizmetlerimiz[0].subItems.map((item, index) => (
                              <li key={index}>
                                <a
                                  href={item.link}
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className=''>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          {fakeData.hizmetlerimiz[1].title} 
                          </p>
                          <ul className="mt-4 text-[15px]">
                            {fakeData.hizmetlerimiz[1].subItems.map((item, index) => (
                              <li key={index}>
                                <a
                                  href={item.link}
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                          {fakeData.hizmetlerimiz[1].additionalItems && (
                            <div>
                              <p className="mt-4 uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                {fakeData.hizmetlerimiz[1].additionalItems.title}
                              </p>
                              <ul className="text-[15px]">
                                {fakeData.hizmetlerimiz[1].additionalItems.subItems.map((item, index) => (
                                  <li key={index}>
                                    <a
                                      href={item.link}
                                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                    >
                                      {item.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-3 py-2 relative group">
                <button className="hover:opacity-50 cursor-default" aria-haspopup="true">
                  {fakeData.hakkimizda.title}
                </button>
                <div
                  className="absolute left-4 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform"
                >
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <ul className="mt-3 text-[15px]">
                            {fakeData.hakkimizda.subItems.slice(0, 4).map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          {fakeData.hakkimizda.referanslarimiz.title}
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>Geçmiş Referanslar</li>
                            {fakeData.hakkimizda.referanslarimiz.gecmisReferanslar.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                            <li>Gelecek Referanslar</li>
                            {fakeData.hakkimizda.referanslarimiz.gelecekReferanslar.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-3 py-2 relative group cursor-pointer">
                <a href="#" class="hover:opacity-50 cursor-default">
                  {fakeData.iletisim}
                </a>
              </li>
              <li className="px-3 py-2 relative group cursor-pointer">
                <a href="#" className="hover:opacity-50 cursor-default">
                  {fakeData.kayitOl}
                </a>
              </li>
            </ul>
            
          </nav> 
          <nav className=''>
          
            <ul>
              <li>
                <a
                  href="#"
                  className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
                >
                  <span className="mr-2">{fakeData.girisYap}</span>
                  <svg
                    className="stroke-current"
                    width="10"
                    height="10"
                    stroke-width="2"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <g fill-rule="evenodd">
                      <path className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                      <path
                        className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-00"
                        d="M1 1l4 4-4 4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          
        
        </div>

        
      
      )}

  




      <nav className='hidden md:block'>
        
        <ul>
          <li>
            <a
              href="#"
              className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
            >
              <span className="mr-2">{fakeData.girisYap}</span>
              <svg
                className="stroke-current"
                width="10"
                height="10"
                stroke-width="2"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <g fill-rule="evenodd">
                  <path className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                  <path
                    className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-00"
                    d="M1 1l4 4-4 4"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
