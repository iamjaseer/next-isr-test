import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { useModalContext } from '@/context/modalContext'; // Assuming you have a modal context defined
import Images from './Images';

export default function ThreeDSlider(props) {
    const { setModalData, setShowModal, setModalFor } = useModalContext();
    const swiperRef = useRef(null); // Reference for Swiper instance

    const openModal = (item) => {
        setModalData({
            imageUrl: item.featuredImage.node.sourceUrl,
            heading: item.title,
            description: item.content && item.content.replace("Client: ", "").replace("Project: ", "").replace("|", "<br/>")
        });
        setShowModal(true);
        setModalFor('work');
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop(); // Stop autoplay
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start(); // Restart autoplay
        }
    };

    return (
        <div
            className="work-slider relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }} // Set the Swiper instance ref
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                    1199: {
                        slidesPerView: 1,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {props.data && props.data.data.works.nodes.map((item, index) => (
                    props.popup === 'true' ? (
                        <SwiperSlide key={index}>
                            <div className="item cursor-pointer" onClick={() => openModal(item)}>
                                <Images
                                    ref={workImageRef}
                                    src={item.featuredImage.node.sourceUrl}
                                    imageurl={item.featuredImage.node.sourceUrl}
                                    styles={''}
                                    quality={100}
                                    width={'500'}
                                    height={'500'}
                                    alt={item.featuredImage.node.altText}
                                    placeholder={false}
                                    classes={'block w-full object-cover'}
                                    onLoad={openModal}
                                />
                                <span className='hidden'>{item.title}</span>
                                <div className="sm:text-center px-6 text-[1rem] mt-3 first-letter:uppercase" dangerouslySetInnerHTML={{
                                    __html: item.content &&
                                        item.content
                                            .replace("Client: ", "")
                                            .replace("Project: ", "")
                                            .replace("|", "<br/>")
                                }} />
                            </div>
                        </SwiperSlide>
                    ) : (
                        <SwiperSlide key={index}>
                            <div>
                                <Images
                                    imageurl={item.featuredImage.node.sourceUrl}
                                    styles={''}
                                    quality={100}
                                    width={'500'}
                                    height={'500'}
                                    alt={item.featuredImage.node.altText}
                                    placeholder={false}
                                    classes={'block w-full'}
                                />
                                <p className='sm:text-center px-6 text-[1rem] mt-3'>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    )
                ))}
            </Swiper>
        </div>
    );
}
