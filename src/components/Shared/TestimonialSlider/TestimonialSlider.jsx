import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "PosturePro changed my life. I no longer slouch at work, and I feel energized all day long.",
      name: "Resel Ahamed",
      title: "CTO, FitCorp",
      avatar: "/avatars/1.jpg",
    },
    {
      id: 2,
      text: "Stylish, comfortable, and effective. It helped me avoid years of back pain.",
      name: "Awlad Hossin",
      title: "Product Designer",
      avatar: "/avatars/2.jpg",
    },
    {
      id: 3,
      text: "My physiotherapist recommended it, and now I recommend it to everyone I know.",
      name: "Nasir Uddin",
      title: "CEO, HealthBloom",
      avatar: "/avatars/3.jpg",
    },
    {
      id: 4,
      text: "As a fitness coach, I’ve tried many products — this is the only one I use daily.",
      name: "Afia Rahman",
      title: "Fitness Coach",
      avatar: "/avatars/4.jpg",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className=" text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What Our Users Say</h2>
        <p className="text-lg text-gray-500 mb-16 max-w-xl mx-auto">
          Real feedback from customers who’ve improved their posture and life with PosturePro.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides
          loop
          spaceBetween={0}
          slidesPerView={3}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          pagination={{
            clickable: true,
            el: ".dots",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.3 },
            1024: { slidesPerView: 1.6 },
          }}
          className="group relative"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="transition-all mb-24 duration-300 ease-in-out mx-4 rounded-3xl p-8 bg-white border border-gray-200 shadow-2xl transform group-hover:blur-sm group-hover:scale-95 group-hover:opacity-60 hover:!blur-none hover:!scale-100 hover:!opacity-100 hover:z-20 backdrop-blur-md max-w-2xl">
                <div className="text-left">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-6xl text-gray-200 leading-none">“</span>
                    <p className="text-gray-800 text-base leading-relaxed">{t.text}</p>
                  </div>
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#B7E366] mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + Dots */}
        <div className=" flex mx-auto max-w-2 justify-center items-center gap-6">
          <button className="prev w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="dots flex gap-2" />

          <button className="next w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
