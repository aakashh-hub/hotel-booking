import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';

const Section3 = ({ next, prev }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [propertyDetails, setPropertyDetails] = useState(formData.propertyDetails || {});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPropertyDetails({
        ...propertyDetails,
        [name]: checked ? [...(propertyDetails[name] || []), value] : propertyDetails[name].filter(v => v !== value),
      });
    } else {
      setPropertyDetails({ ...propertyDetails, [name]: value });
    }
  };

  const handleNext = () => {
    setFormData({ ...formData, propertyDetails });
    next();
  };

  return (
    <div>
      <div>
        <label>Cancellation Policy:</label>
        <div>
          <input type="radio" name="cancellationPolicy" value="Refundable upto 1 day before check-in date" onChange={handleChange} /> 1 Day
          <input type="radio" name="cancellationPolicy" value="Refundable upto 3 day before check-in date" onChange={handleChange} /> 3 Days
          <input type="radio" name="cancellationPolicy" value="Non-refundable" onChange={handleChange} /> Non-refundable
        </div>
      </div>
      <div>
        <label>Check-in Time:</label>
        <select name="checkInTime" onChange={handleChange} className="border p-2">
          <option value="">Select Time</option>
          <option value="1am">1 AM</option>
          <option value="2am">2 AM</option>
          {/* Add more times */}
        </select>
      </div>
      <div>
        <label>Check-out Time:</label>
        <select name="checkOutTime" onChange={handleChange} className="border p-2">
          <option value="">Select Time</option>
          <option value="11am">11 AM</option>
          <option value="12pm">12 PM</option>
          {/* Add more times */}
        </select>
      </div>
      <div>
        <label>Access:</label>
        <div>
          <input type="checkbox" name="access" value="keyless access" onChange={handleChange} /> Keyless Access
          <input type="checkbox" name="access" value="front-desk" onChange={handleChange} /> Front Desk
          <input type="checkbox" name="access" value="car park" onChange={handleChange} /> Car Park
        </div>
      </div>
      <div>
        <label>Offering:</label>
        <div>
          <input type="checkbox" name="offering" value="ac" onChange={handleChange} /> AC
          <input type="checkbox" name="offering" value="pets allowed" onChange={handleChange} /> Pets Allowed
          <input type="checkbox" name="offering" value="transport to airport" onChange={handleChange} /> Transport to Airport
          <input type="checkbox" name="offering" value="complimentary wifi" onChange={handleChange} /> Complimentary Wifi
          <input type="checkbox" name="offering" value="breakfast" onChange={handleChange} /> Breakfast
          <input type="checkbox" name="offering" value="daily cleaning" onChange={handleChange} /> Daily Cleaning
          <input type="checkbox" name="offering" value="laundry service" onChange={handleChange} /> Laundry Service
        </div>
      </div>
      <div>
        <label>Payment:</label>
        <div>
          <input type="checkbox" name="payment" value="card" onChange={handleChange} /> Card
          <input type="checkbox" name="payment" value="cash" onChange={handleChange} /> Cash
          <input type="checkbox" name="payment" value="online payments" onChange={handleChange} /> Online Payments
        </div>
      </div>
      <button onClick={prev} className="bg-gray-500 text-white p-2">
        Previous
      </button>
      <button onClick={handleNext} className="bg-blue-500 text-white p-2">
        Next
      </button>
    </div>
  );
};

export default Section3;