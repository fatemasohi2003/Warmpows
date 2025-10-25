
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import servicesData from "../data/services.json";
import toast from "react-hot-toast";
import { FaStar, FaEnvelope, FaTag, FaClock } from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.serviceId === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold">Service not found</h2>
        <button
          onClick={() => navigate("/services")}
          className="btn btn-primary mt-4"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Service booked successfully! We'll contact you soon.");
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Service Image */}
        <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Service Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <div className="badge badge-secondary mb-4">{service.category}</div>
            <h1 className="text-4xl font-bold mb-4">{service.serviceName}</h1>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-xl font-bold">{service.rating}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-sm text-gray-600">Available Slots</p>
                  <p className="text-xl font-bold">{service.slotsAvailable}</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Provider Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Provider:</span>
                  {service.providerName}
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <span className="font-semibold">Email:</span>
                  {service.providerEmail}
                </p>
                <p className="flex items-center gap-2">
                  <FaTag className="text-green-500" />
                  <span className="font-semibold">Price:</span>
                  <span className="text-2xl font-bold text-orange-500">
                    ${service.price}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-xl sticky top-4">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Book This Service</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="alert alert-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-sm">
                      We'll contact you within 24 hours
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;