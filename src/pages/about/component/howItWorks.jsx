import React from 'react';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const HowItWorks = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="my-24 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[2.5rem] mb-12">How It Works</h1>

        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col items-center max-w-sm">
            <UserPlusIcon className="h-10 w-10 text-blue-500 mb-2" />
            <h2 className="text-[1.5rem] font-semibold text-center">Sign Up</h2>
            <p className="text-center">
              Create an account on MediConnect and complete your profile.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <MagnifyingGlassIcon className="h-10 w-10 text-green-500 mb-2" />
            <h2 className="text-[1.5rem] font-semibold text-center">
              Search for Providers
            </h2>
            <p className="text-center">
              Use our search feature to find healthcare providers based on
              specialty, location, and availability.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <CalendarIcon className="h-10 w-10 text-yellow-500 mb-2" />
            <h2 className="text-[1.5rem] font-semibold text-center">
              Book an Appointment
            </h2>
            <p className="text-center">
              Choose a suitable time slot and book an appointment with just a
              few clicks.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <AdjustmentsHorizontalIcon className="h-10 w-10 text-red-500 mb-2" />
            <h2 className="text-[1.5rem] font-semibold text-center">
              Manage Your Appointments
            </h2>
            <p className="text-center">
              Reschedule or cancel appointments as needed, and receive
              notifications for any changes.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <UserCircleIcon className="h-10 w-10 text-gray-500 mb-2" />
            <h2 className="text-[1.5rem] font-semibold text-center">
              Visit the Doctor
            </h2>
            <p className="text-center">
              Attend your appointment as scheduled, knowing that MediConnect has
              taken care of the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
