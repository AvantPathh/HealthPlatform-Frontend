import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/rootLayout';
import LandingPage from './pages/landing';
import About from './pages/about';
import Profile from './pages/profile';
import Appointment from './pages/appointment';
import Reschedule from './pages/reschedule';
import Contact from './pages/contact';
import Admin from './pages/admin';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'about-us',
          element: <About />,
        },
        {
          path: 'profle',
          element: <Profile />,
        },
        {
          path: 'appointment',
          element: <Appointment />,
        },
        {
          path: 'reschedule',
          element: <Reschedule />,
        },
        {
          path: 'contact-us',
          element: <Contact />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
