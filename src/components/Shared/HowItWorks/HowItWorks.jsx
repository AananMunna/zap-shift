import { FaBoxOpen, FaMoneyBillWave, FaWarehouse, FaBusinessTime } from 'react-icons/fa';

const HowItWorks = () => {
  const features = [
    {
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaBoxOpen className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMoneyBillWave className="w-8 h-8 text-green-600" />
    },
    {
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaWarehouse className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaBusinessTime className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <section className="py-12 my-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Title on left - full width on mobile, 1/3 on desktop */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">How it Works</h2>
            <p className="text-gray-600 text-lg">
              Our seamless process ensures your deliveries are handled with care and efficiency.
            </p>
          </div>

          {/* Cards on right - full width on mobile, 2/3 on desktop */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;