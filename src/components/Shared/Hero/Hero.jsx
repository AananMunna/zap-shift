import heroImg from "../../../assets/big-deliveryman.png"; // Export your image from Figma as SVG or PNG
import deliveryIcon from "../../../assets/tiny-deliveryman.png"; // small man with box icon

const Hero = () => {
  return (
<div className=" pb-12 py-6">
      <section className="relative overflow-hidden bg-gradient-to-tr from-white to-[#f2fef2] py-16 md:py-24 rounded-3xl md:mx-8 ">
      {/* Diagonal green shape bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-lime-300 transform -skew-y-3 origin-bottom" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 ms-10 text-center md:text-left">
          <img src={deliveryIcon} alt="Delivery Icon" className="w-6/12 mb-4 inline-block" />

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            We Make Sure Your <br />
            <span className="text-lime-500">Parcel Arrives</span> On Time <br />– No Fuss.
          </h1>

          {/* Decorative underline */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            <div className="w-10 h-[2px] bg-gray-700" />
            <div className="w-5 h-[2px] bg-gray-300" />
            <div className="w-3 h-[2px] bg-gray-200" />
          </div>
        </div>

        {/* Right Image */}
<div className="flex-1 flex justify-center">
  <img
    src={heroImg}
    alt="Delivery Illustration"
    className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px]"
  />
</div>

      </div>
    </section>
</div>
  );
};

export default Hero;
