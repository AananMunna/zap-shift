import image2 from '../../../assets/big-deliveryman.png'
import image3 from '../../../assets/agent-pending.png'
import image1 from '../../../assets/live-tracking.png'
const FeaturesSection = () => {
  const features = [
    {
      title: "Live Parcel Tracking",
      description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipments journey and get instant status updates for complete peace of mind.",
      image: image1 // Replace with your actual image path
    },
    {
      title: "100% Safe Delivery",
      description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: image2 // Replace with your actual image path
    },
    {
      title: "24/7 Call Center Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: image3 // Replace with your actual image path
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            {/* Left side - Image */}
            <div className="flex-shrink-0 mr-6 w-1/4">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Dotted border separator */}
            <div className="border-l-2 border-dotted border-gray-300 h-24 self-stretch mx-6"></div>
            
            {/* Right side - Text content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;