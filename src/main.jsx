import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Shop",
    element: <Shop />,
  },
  {
    path: "Cart",
    element: <Cart />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

