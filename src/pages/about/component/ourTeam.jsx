import React from 'react';
import N from '../../../constant';

const OurTeam = () => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-[2.5rem]">Our Team</h1>
        <p className="text-center">
          Our team at MediConnect includes experienced healthcare professionals,
          tech enthusiasts, and dedicated support staff. We're passionate <br />
          about making healthcare more accessible and are committed to providing
          the best possible service to our users.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-[2rem] my-12 text-center">Our Doctors</h2>

        <div className="flex gap-4">
          {N.DOCTORS.map((doctor, index) => (
            <div key={index}>
              <div className="bg-primary p-4 rounded-lg shadow-lg">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  //   className="h-[500px] w-[450px]"
                  className="h-[500px] w-[450px] object-cover rounded-t-lg"
                />
                {/* <p className="text-[1.6rem]">{doctor.name}</p>
                <p className="text-[1.2rem]">{doctor.specialty}</p> */}
                <div className="p-4">
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

// import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.css';
// import N from '../../../constant';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const OurTeam = () => {
//   return (
//     <div className="text-center py-8">
//       <p className="text-lg md:text-xl lg:text-2xl mb-6 mx-auto max-w-2xl">
//         Our team at MediConnect includes experienced healthcare professionals,
//         tech enthusiasts, and dedicated support staff. We're passionate about
//         making healthcare more accessible and are committed to providing the
//         best possible service to our users.
//       </p>

//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
//         Our Doctors
//       </h2>

//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         className="flex gap-6"
//       >
//         {N.DOCTORS.map((doctor, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-primary p-4 rounded-lg shadow-lg">
//               <img
//                 src={doctor.img}
//                 alt={doctor.name}
//                 className="h-[300px] w-full object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <p className="text-lg font-semibold">{doctor.name}</p>
//                 <p className="text-sm text-gray-600">{doctor.specialty}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default OurTeam;
