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
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import ProfileDashboard from './ProfileDashboard/ProfileDashboard/ProfileDashboard.jsx';
import PersonalInfo from './ProfileDashboard/PersonalInfo/PersonalInfo.jsx';
import BuisnessDetails from './ProfileDashboard/BuisnessDetails/BuisnessDetails.jsx';
import Crops from './ProfileDashboard/Crops/Crops.jsx';



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
      },
      
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
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
  },
  {
    path:'profileDashboard',
    element:<ProfileDashboard/>,
    children:[
      {
        path:'personalInfo',
        element:<PersonalInfo/>
      },
      {
        path:'businessDetails',
        element:<BuisnessDetails/>
      },
      {
        path:'crops',
        element:<Crops/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
