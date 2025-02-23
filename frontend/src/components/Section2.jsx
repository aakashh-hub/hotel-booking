import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';

const Section2 = ({ next, prev }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [locationDetails, setLocationDetails] = useState(formData.locationDetails || {});

  const handleChange = (e) => {
    setLocationDetails({ ...locationDetails, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setFormData({ ...formData, locationDetails });
    next();
  };

  return (
    <div>
      <select name="country" value={locationDetails.country || ''} onChange={handleChange} className="border p-2">
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        {/* Add more countries */}
      </select>
      <input
        type="text"
        name="state"
        value={locationDetails.state || ''}
        onChange={handleChange}
        placeholder="State"
        className="border p-2"
      />
      <input
        type="text"
        name="city"
        value={locationDetails.city || ''}
        onChange={handleChange}
        placeholder="City"
        className="border p-2"
      />
      <input
        type="text"
        name="address"
        value={locationDetails.address || ''}
        onChange={handleChange}
        placeholder="Address"
        className="border p-2"
      />
      <input
        type="text"
        name="pincode"
        value={locationDetails.pincode || ''}
        onChange={handleChange}
        placeholder="Pincode"
        className="border p-2"
      />
      <input
        type="text"
        name="distance"
        value={locationDetails.distance || ''}
        onChange={handleChange}
        placeholder="Distance to nearby location"
        className="border p-2"
      />
      <button onClick={prev} className="bg-gray-500 text-white p-2">
        Previous
      </button>
      <button onClick={handleNext} className="bg-blue-500 text-white p-2">
        Next
      </button>
    </div>
  );
};

export default Section2;