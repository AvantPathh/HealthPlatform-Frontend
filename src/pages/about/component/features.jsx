import {
  BellIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  return (
    <div className="my-24 flex flex-col justify-center items-center bg-primary">
      <h1 className="font-bold text-[2.5rem] my-12">Features</h1>

      <div className="flex flex-wrap gap-10 justify-center mb-12">
        <div className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md">
          <CheckCircleIcon className="h-10 w-10 text-blue-500 mb-2" />
          <p className="text-[1.2rem] text-center">
            Online Appointment Booking
          </p>
        </div>

        <div className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md">
          <XCircleIcon className="h-10 w-10 text-red-500 mb-2" />
          <p className="text-[1.2rem] text-center">
            Rescheduling and Cancellations
          </p>
        </div>

        <div className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md">
          <ClockIcon className="h-10 w-10 text-green-500 mb-2" />
          <p className="text-[1.2rem] text-center">Doctor Availability</p>
        </div>

        <div className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md">
          <BellIcon className="h-10 w-10 text-yellow-500 mb-2" />
          <p className="text-[1.2rem] text-center">
            Reminders and Notifications
          </p>
        </div>

        <div className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md">
          <EnvelopeIcon className="h-10 w-10 text-gray-500 mb-2" />
          <p className="text-[1.2rem] text-center">Secure Messaging</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
