import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import {ReceipientForm} from './components/form/ReciepientForm.tsx';
import Products from './page/product/Products.tsx';
import Loader from './components/Loder/Loder.tsx';
import Navbar from './components/Navbar/Navbar.tsx'; // Adjust the path as needed

const AppLayout = () => (
  <div>
    <Navbar authorize={true} /> {/* Set authorize as needed */}
    <div style={{ marginTop: '64px' }}> {/* Add margin to prevent content overlap */}
      <Outlet />
    </div>
  </div>
);

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // AppLayout will include Navbar and Outlet
      children: [
        { path: "", element: <ReceipientForm /> },
        { path: "products/:giftType", element: <Products /> },
        { path: "loading-page", element: <Loader /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
