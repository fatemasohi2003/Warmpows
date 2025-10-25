import React from "react";
import { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaUserMd } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const winterTips = [
    {
      id: 1,
      title: "Keep Them Warm",
      description:
        "Provide warm bedding and consider pet clothing for outdoor activities.",
      icon: "🧥",
    },
    {
      id: 2,
      title: "Paw Care",
      description:
        "Protect paws from ice and salt with booties or paw balm.",
      icon: "🐾",
    },
    {
      id: 3,
      title: "Nutrition Boost",
      description:
        "Adjust diet to maintain energy levels during cold weather.",
      icon: "🍖",
    },
    {
      id: 4,
      title: "Indoor Exercise",
      description:
        "Keep your pet active with indoor games when it's too cold outside.",
      icon: "🎾",
    },
  ];

  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      specialty: "Winter Pet Care Specialist",
      image: "/assets/doctor.jpeg",
      experience: "12 years",
    },
    {
      id: 2,
      name: "Dr. James Cooper",
      specialty: "Veterinary Dermatologist",
      image: "/assets/doctor_3.jpeg",
      experience: "10 years",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pet Nutrition Expert",
      image: "assets/doctor_2.jpeg",
      experience: "8 years",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <HeroSlider />
      </section>

      {/* Popular Winter Care Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Popular Winter Care Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after services to keep your pets happy and
            healthy during the cold season
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </section>

      {/* Winter Care Tips */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Winter Care Tips for Pets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential advice to ensure your furry friends thrive in winter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {winterTips.map((tip) => (
              <div
                key={tip.id}
                className="card bg-white shadow-lg"
                data-aos="zoom-in"
              >
                <div className="card-body items-center text-center">
                  <div className="text-6xl mb-4">{tip.icon}</div>
                  <h3 className="card-title text-lg">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Vets */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Vets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced veterinarians is dedicated to your pet's
            winter wellness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-base-100 shadow-xl"
              data-aos="fade-up"
            >
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={vet.image} alt={vet.name} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{vet.name}</h3>
                <p className="text-orange-500 font-semibold">{vet.specialty}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUserMd />
                  <span>{vet.experience} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section (Extra Section) */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose WarmPaws?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best winter care for your beloved
              pets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4" data-aos="fade-right">
              <FaCheckCircle className="text-4xl text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Care</h3>
                <p className="text-gray-600">
                  Certified professionals with years of experience in pet winter
                  care
                </p>
              </div>
            </div>
            <div className="flex gap-4" data-aos="fade-up">
              <FaCheckCircle className="text-4xl text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Quality services at competitive prices with flexible packages
                </p>
              </div>
            </div>
            <div className="flex gap-4" data-aos="fade-left">
              <FaCheckCircle className="text-4xl text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer support for all your pet care needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;