import { 
  FaShippingFast, 
  FaTruck, 
  FaBoxes, 
  FaMoneyBillWave, 
  FaBriefcase, 
  FaExchangeAlt 
} from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: <FaShippingFast className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-blue-600"
    },
    {
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: <FaTruck className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-green-600"
    },
    {
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and offer sales support.",
      icon: <FaBoxes className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-amber-600"
    },
    {
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-purple-600"
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FaBriefcase className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-red-600"
    },
    {
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaExchangeAlt className="w-8 h-8" />,
      color: "bg-white hover:bg-[#CAEB66]",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#03373D] rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business alignments — we deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} p-8 rounded-2xl transition-all duration-300 flex flex-col items-center text-center hover:shadow-lg`}
            >
              <div className={`${service.iconColor} mb-6 p-4 rounded-full bg-white shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;