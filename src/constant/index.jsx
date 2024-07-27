const N = {
  NAVLINKS: [
    {
      name: 'Landing',
      path: '/',
    },
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'About',
      path: '/about-us',
    },
    {
      name: 'Patient',
      path: '#',
      subItems: [
        { name: 'Profile', path: '/profile' },
        { name: 'Appointment', path: '/appointment' },
        { name: 'Reschedule', path: '/reschedule' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact-us',
    },
    {
      name: 'Admin',
      path: '/admin',
    },
  ],
};

export default N;
