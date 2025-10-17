/** @format */

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './pages/Home';
import Archives from './pages/Archives';
import About from './pages/About';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/archives', element: <Archives /> },
      { path: '/about', element: <About /> },
    ],
  },
  { path: '*', element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
