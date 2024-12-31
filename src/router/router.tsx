import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import SneakerPage from '../pages/sneakerPage/SneakerPage';
import OrderPage from '../pages/orderPage/OrderPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'sneaker/:id', element: <SneakerPage /> },
    ],
  },
]);
