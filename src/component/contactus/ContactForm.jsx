'use client';
import { sendEmail } from '@/lib/emailsend';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    'Thank you for your submission!'
  );
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.consent) {
      setConsentError(true);
      return;
    } else {
      setConsentError(false);
    }
    if (!formData.fullName.trim()) {
      errors.fullName = 'First Name is required';
    }
    //Added
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    console.log(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputFocus = (name) => {
    // Clear the error for the focused input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSending(true);
      const res = await sendEmail({ data: formData });
      if (res === 'success') {
        setTimeout(() => {
          setIsSending(false);
          setIsSubmitted(true);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: '',
            consent: false,
          });
        }, 2000);
      } else {
        setSubmitMessage('Sorry, Something went wrong!');
      }
    } else {
      console.log('not done');
    }
  };

  return (
    <div className=" mx-auto w-full md:w-3/4  bg-white rounded-[32px] p-6 md:p-12 ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-[24px]">
          <div className="relative">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onFocus={() => handleInputFocus('fullName')}
              onChange={handleChange}
              className=" w-full bg-[#f0f0f0] border-b capitalize font-light placeholder-[#777777] font-inter text-sm md:text-base  focus:outline-none px-6 py-3 rounded-[32px] mt-3"
              placeholder="Type here ..."
            />
            {formErrors.fullName && (
              <p className="text-red-400 text-[12px] absolute ">
                *{formErrors.fullName}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full bg-[#f0f0f0] border-b capitalize font-light placeholder-[#777777] font-inter text-sm md:text-base  focus:outline-none px-6 py-3 rounded-[32px] mt-3"
                placeholder="Type here ..."
              />
              {formErrors.email && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className=" w-full bg-[#f0f0f0] border-b capitalize font-light placeholder-[#777777] font-inter text-sm md:text-base  focus:outline-none px-6 py-3 rounded-[32px] mt-3"
                placeholder="Type here ..."
              />
              {formErrors.phone && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className=" w-full bg-[#f0f0f0] border-b capitalize font-light placeholder-[#777777] font-inter text-sm md:text-base  focus:outline-none p-6 rounded-[32px] mt-3"
              rows={10}
              placeholder="Type here ..."
            />
            {formErrors.message && (
              <p className="text-red-400 text-[12px] absolute ">
                *{formErrors.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-10 flex items-center text-[#777777]">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label
            htmlFor="consent"
            className={`text-sm  ${
              consentError ? 'text-red-400' : 'text-gray-600'
            }`}
          >
            Your information will be used for business-related communication.
          </label>
        </div>
        <div className=" mt-8 md:mt-12 max-w-[400px]">
          <button
            disabled={isSending}
            type="submit"
            className="rounded-[50px] bg-gradient-to-l from-lime-200 to-lime-500 text-white text-lg font-semibold py-[15px] px-[50px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
          >
            {isSending ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="mt-4 text-center">
          <p className="text-green-500">{submitMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
