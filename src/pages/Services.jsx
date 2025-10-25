import { useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Winter Pet Care Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Browse through our comprehensive range of winter care services
          designed to keep your pets healthy and happy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;