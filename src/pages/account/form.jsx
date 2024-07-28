import React from 'react';
import { useState } from 'react';
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
    // <div>
    <div className="bg-[#2222] w-1/2 pt-7 px-32 rounded-tl-3xl rounded-bl-3xl">
      <div className="text-[2rem] mb-36 text-white">LOGO</div>

      <div className="text-white">
        <div className="mb-20">
          {/* i will add handimage to the h1 */}
          <h1 className="text-[1.5rem]">Hi there....</h1>
          <p className="text-[1rem]">Get Started with Appointments</p>
        </div>
        <form action="" className="flex flex-col gap-7">
          <label htmlFor="" className="block">
            Full name
            <input
              type="text"
              name="text"
              id="name"
              placeholder="Ruth Brown"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg"
            />
          </label>

          <label htmlFor="" className="block">
            Email
            <input
              type="text"
              name="text"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg"
            />
          </label>

          <label htmlFor="">
            Pnone number
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

          <button className="w-full h-14 px-4 py-2 mt-8 bg-primary rounded-lg">
            Get Started
          </button>
        </form>
        <p className="mt-28">@copyright</p>
      </div>
    </div>
    // </div>
  );
};

export default Form;
