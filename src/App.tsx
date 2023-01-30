import React, { Suspense } from 'react';
import logo from './assets/svg/logo.svg';
import './assets/scss/_app.scss';
import { DefaultLayout } from './layout/DefaultLayout';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Dashboard } from './pages/dashboard/Dashboard';
import { ProductList } from './pages/inventory/ProductList';
import { ProductForm } from './pages/inventory/ProductForm';


const loading = (<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>)

const router = createHashRouter([
  {
    element: <DefaultLayout />,
    children:[
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/inventory/list",
        element: <ProductList />
      },
      {
        path: "/inventory/form",
        element: <ProductForm />
      },
    ]
  },
  
]);


export default class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <RouterProvider router={router} />
    );
  }

}

