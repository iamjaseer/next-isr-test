'use client'


import { useModalContext } from '@/context/modalContext';
import React, { useState, useEffect, useRef } from 'react';


export default function Packages({ type, title, packages, content }) {


    const { setModalFor, setShowModal, setModalData, setIsClassAdded } = useModalContext()


    const jsonArray = packages && JSON.parse(packages.features);


    const [isVisible, setIsVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        setWindowWidth(window.innerWidth); // set initial width
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset <= 100); // hide the div if scrolled down
        };
        if (windowWidth && windowWidth > 1199) {
            window.addEventListener("scroll", handleScroll);
        } else {
            setIsVisible(true); // Show the div when width is not available or greater than 575px
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowWidth]);



    const selectedPackageRef = useRef(null);


    const openPackageBookModal = () => {

        const packageValue = selectedPackageRef.current.dataset.package;

        setShowModal(true)
        setModalFor('package')
        setModalData(packageValue)
        setIsClassAdded(true)

    };

    return (<>
        {type !== 'mini' ?
            <div className="lg:text-start lg:basis-[100%] rounded-[16px]" >
                {!isVisible && <div className="gap-[0px] pt-5 px-7 pb-5 items-end bg-price-package overflow-hidden sticky top-[0] z-[100] rounded-t-[16px] border-1 border-white border-opacity-5 hidden lg:grid">
                    <div className="z-30 relative">
                        <h4 className="uppercase font-bold  text-[1rem]">{title} Package</h4>
                    </div>
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="bg-sky-500 border-sky-500 mt-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                        Starting at AED {packages.price}
                    </button>
                </div>}
                {isVisible && <div className="min-h-[200px] grid gap-[0px] pt-7 px-7 pb-5 items-end bg-price-package overflow-hidden z-[100] rounded-t-[16px] border-1 border-white border-opacity-5">
                    <div className="z-30 relative">
                        <h4 className="uppercase font-bold text-sky-500 text-[1.7rem] mb-1">{title}</h4>
                        <span className="uppercase text-sm font-semibold leading-[18px] block">Package</span>
                        <span className="text-md leading-[18px] block mt-5">{packages.subHeading}</span>
                    </div>
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="bg-sky-500 border-sky-500 mt-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                        Starting at AED {packages.price}
                    </button>
                </div>}
                <div className="py-5 mb-0 px-7 text-sm font-bold uppercase bg-sky-950 border-b-2 border-opacity-5 border-white text-sky-500">Key Benefits</div>
                <div className="list-content-package bg-sky-950 bg-opacity-70 backdrop-filter backdrop-blur-lg pb-7 overflow-hidden rounded-b-[16px] lg:rounded-none" dangerouslySetInnerHTML={{ __html: content }} />
                 <div className="py-5 mb-0 px-7 text-sm font-bold uppercase bg-sky-950 border-b-2 border-opacity-5 border-white hidden lg:block text-sky-500">Features</div>
                <ul className="list-unstyled bg-sky-950 bg-opacity-70 backdrop-filter backdrop-blur-lg hidden lg:block overflow-hidden rounded-b-[16px]">
                    {jsonArray && jsonArray.map((item, key) => {
                        // console.log(item)
                        return <li key={key} className='py-5 border-b-2 border-opacity-5 border-white px-7 flex justify-between items-center min-h-[90px] hover:bg-sky-400 hover:bg-opacity-5 transition-all'>

                            <span className={`${item.value == 'x' ? 'opacity-[0.4]' : null} text-[13px] uppercase w-[60%]`}>{item.label}</span>
                          <div className='flex items-center gap-[10px]'>
                          {item.value !== 'x'  ? <span className={item.value !== 'x' && item.value !== 'Yes' && item.value.length > 1 ? "text-sky-500 text-bold text-[13px] uppercase pt-[3px] mt-[1px] block text-end" : "text-sky-500 text-bold text-[13px] uppercase pt-[3px]"}>{item.value}</span> : null}
                            {item.value == 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#EEE" fillOpacity=".3" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.078 10.653a.655.655 0 0 1-.925.925L8.5 9.424l-2.153 2.154a.655.655 0 0 1-.925-.925L7.576 8.5 5.422 6.347a.654.654 0 0 1 .925-.925L8.5 7.576l2.153-2.154a.654.654 0 1 1 .925.925L9.424 8.5l2.154 2.153Z" /></g></svg> : null}
                            {item.value !== 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#2FA4D8" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.732 7.001-4.577 4.577a.654.654 0 0 1-.925 0L4.768 9.616a.654.654 0 1 1 .925-.925l1.5 1.5 4.114-4.115a.655.655 0 0 1 .925.925Z" /></g></svg> : null}
                          </div>
                        </li>
                    })}
                </ul>

            </div>
            :
            <div className="lg:text-start lg:basis-[100%] rounded-[16px]">
                <div className="min-h-[200px] grid gap-[0px] pt-7 px-7 pb-5 items-end bg-price-package overflow-hidden z-[100] rounded-t-[16px] border-1 border-white border-opacity-5">
                    <div className="z-30 relative">
                        <h4 className="uppercase font-bold text-sky-500 text-[1.7rem] mb-1">{title}</h4>
                        <span className="uppercase text-sm font-semibold leading-[18px] block">Package</span>
                        <span className="text-md leading-[18px] block mt-5">{packages.subHeading}</span>
                    </div>

                </div>
                <div className="py-5 mb-0 px-7 text-sm font-bold uppercase bg-sky-950 border-b-2 border-opacity-5 border-white text-sky-500">Key Benefits</div>
                <div className="list-content-package bg-sky-950 bg-opacity-70 backdrop-filter backdrop-blur-lg pb-7 overflow-hidden" dangerouslySetInnerHTML={{ __html: content }} />

                <div className="list-content-package bg-sky-950 bg-opacity-70 backdrop-filter backdrop-blur-lg  p-7 pt-0 overflow-hidden rounded-b-[16px]">
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="bg-sky-500 border-sky-500 mt-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                        Starting at AED {packages.price}
                    </button>
                </div>

            </div>
        }
    </>)
}