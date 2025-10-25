import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    serviceId,
    serviceName,
    providerName,
    price,
    rating,
    image,
    category,
    slotsAvailable,
  } = service;

  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary">{category}</div>
        <h2 className="card-title text-lg">{serviceName}</h2>
        <p className="text-sm text-gray-600">{providerName}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{rating}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Slots:</span>{" "}
            <span className="font-semibold">{slotsAvailable}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl font-bold text-orange-500">${price}</div>
          <Link
            to={`/service/${serviceId}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;