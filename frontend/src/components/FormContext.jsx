import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    basicInfo: {
      hotelName: '',
      description: '',
      photos: [], 
    },
    locationDetails: {},
    propertyDetails: {},
    roomDetails: [],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};