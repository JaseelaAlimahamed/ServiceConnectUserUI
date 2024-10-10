import React from 'react';
import PropTypes from 'prop-types';

const ServicesSection = ({ services }) => {
    return (
        <section className="p-4 mt-4 bg-white shadow-md rounded-2xl">
            {/* Title */}
            <h3 className="mb-6 text-lg font-bold">Services</h3>

            {/* List of Services */}
            <ul>
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <li key={index} className="flex items-center mb-6">
                            {/* Icon */}
                            <IconComponent className="mr-4 text-2xl text-dark-gray" aria-hidden="true" />
                            {/* Service Name */}
                            <span className="font-semibold text-gray-700">{service.name}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

ServicesSection.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
        })
    ).isRequired,
};

export default ServicesSection;
