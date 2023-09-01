import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Home/Home/Home.jsx';
import About from './component/Pages/AboutUs/About/About.jsx';
import CommunityPage from './component/Pages/AboutUs/CommunityPage/CommunityPage/CommunityPage.jsx';
import ListMember from './component/Pages/AboutUs/ListMember/ListMember.jsx';
import Dashboard from './Dashboard/Dashboard/Dashboard.jsx';
import Traders from './Dashboard/Traders/Traders.jsx';
import Farmers from './Dashboard/Farmers/Farmers.jsx';
import Product from './component/Pages/Product/Poduct/Product.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'community',
        element:<CommunityPage/>
      },
      {
        path:'products',
        element:<Product/>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'traders',
        element:<Traders/>
      },
      {
        path:'farmers',
        element:<Farmers/>
      }
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
