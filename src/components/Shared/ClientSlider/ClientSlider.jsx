import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import casio from '../../../assets/brands/casio.png';
import amazon from '../../../assets/brands/amazon.png';
import moonstar from '../../../assets/brands/moonstar.png';
import stx from '../../../assets/brands/start.png';
import startpeople from '../../../assets/brands/start-people 1.png';
import randstad from '../../../assets/brands/randstad.png';

const ClientSlider = () => {
  const logos = [
    { name: 'CASIO', image: casio },
    { name: 'amazon', image: amazon },
    { name: '$-moonstar', image: moonstar },
    { name: 'stx+', image: stx },
    { name: 'startpeople', image: startpeople },
    { name: 'r-randstad', image: randstad }
  ];

  const swiperRef = useRef(null);

  return (
    <section className="py-16 my-26 max-w-7xl mx-auto rounded-3xl  px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-gray-600 mb-4">
            We've helped thousands of sales teams
          </h3>
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            loop={true}
            className="client-slider"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  {/* Replace with actual logo images */}
                  <img src={logo.image} alt="" />
                  {/* If using actual images: */}
                  {/* <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="max-h-16 w-auto object-contain" 
                  /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;