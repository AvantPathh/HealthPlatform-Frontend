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

  BUTTONDATA: [
    {
      // id: 1,
      title: 'New Patient',
      link: '/sign-up',
      buttonText: 'Sign Up',
    },
    {
      // id: 2,
      title: 'Old Patient',
      link: '/login',
      buttonText: 'Login',
    },
    {
      // id: 3,
      title: 'Admin',
      link: '/admin-login',
      buttonText: 'Login',
    },
  ],
};

export default N;
