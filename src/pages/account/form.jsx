import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Form = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number:', phone);
  };

  return (
    <div className="bg-[#2222] w-full md:w-1/2 pt-7 px-6 md:px-32 rounded-tl-3xl rounded-bl-3xl">
      <div className="text-[2rem] mb-16 md:mb-36 text-white">LOGO</div>
      <div className="text-white">
        <div className="mb-10 md:mb-20">
          <h1 className="text-[1.5rem]">Hi there....</h1>
          <p className="text-[1rem]">Get Started with Appointments</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <label htmlFor="name" className="block">
            Full name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ruth Brown"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
            />
          </label>

          <label htmlFor="email" className="block">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
            />
          </label>

          <label htmlFor="phone">
            Phone number
            <PhoneInput
              country={'gh'}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
              containerStyle={{ width: '100%' }}
              inputStyle={{ width: '100%', height: '56px' }}
              className="text-black"
            />
          </label>

          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg"
          >
            Get Started
          </button>
        </form>
        <p className="mt-8 md:mt-28 text-center">@copyright</p>
      </div>
    </div>
  );
};

export default Form;
