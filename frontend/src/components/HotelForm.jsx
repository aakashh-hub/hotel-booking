import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Review from './Review';

const HotelForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && <Section1 next={nextStep} />}
      {step === 2 && <Section2 next={nextStep} prev={prevStep} />}
      {step === 3 && <Section3 next={nextStep} prev={prevStep} />}
      {step === 4 && <Section4 next={nextStep} prev={prevStep} />}
      {step === 5 && <Review prev={prevStep} />}
    </div>
  );
};

export default HotelForm;