import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import * as React from "react";
import * as ReactDOM from "react-dom/client"
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import FAQ from './pages/FAQ/FAQ'
import Help from './pages/Help/Help'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PreOrder from './pages/PreOrder/PreOrder'
import CartOrder from './pages/CartOrder/CartOrder'
import Payment from './pages/Payment/Payment'
import Events from './pages/Events/Events'
import MyTickets from './pages/Mytickets/Mytickets'
import Scanner from './pages/ScannerView/ScannerView'
import Profile from './pages/Profile/Profile'
import QrTicket from './pages/QrTickets/QrTicket'
import EventAdmin from './pages/EventAdmin/EventAdmin'
import TierAdmin from './pages/TierAdmin/TierAdmin'
import Error404 from './pages/Error404/Error404'
import UserAdmin from './pages/UserAdmin/UserAdmin';
import OrganizerAdmin from './pages/OrganizerAdmin/OrganizerAdmin';
import OrderAdmin from './pages/OrderAdmin/OrderAdmin';
import GraphicStatistics from './pages/GraphicStatistics/GraphicStatistics';
import SavePasswordReset from './pages/Password/SavePasswordReset';
import SponsorAdmin from './pages/SponsorAdmin/SponsorAdmin';
import SendEmailResetPassword from "./pages/Password/SendEmailResetPassword"
import SetPassword from "./pages/Password/SetPassword"
import UserRolesAdmin from './pages/UserRolesAdmin/UserRolesAdmin';
import CategoriesAdmin from './pages/CategoriesAdmin/CategoriesAdmin';
import {Cloudinary} from "@cloudinary/url-gen";
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/savepasswordreset/:email/",
    element: <SavePasswordReset />,
  },
  {
    path: "/termsandconditions",
    element: <TermsAndConditions/>,
  },
  {
    path: "/faq",
    element: <FAQ/>,
  },
  {
    path: "/help",
    element: <Help/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/contactus",
    element: <ContactUs/>,
  },
  {
    path: "/preorder/:code/",
    element: <PreOrder/>,
  },
  {
    path: "/cartoder/:quantity/:tier/",
    element: <CartOrder/>,
  },
  {
    path: "/payment",
    element: <Payment/>,
  },
  {
    path: "/events",
    element:<PrivateRoute role={["Admin"]} children={<Events/>} />,
  },
  {
    path: "/mytickets",
    element: <MyTickets/>,
  },
  {
    path: "/scanner",
    element: <Scanner/>,
  },
  {
    path: "/profile",
    element: <PrivateRoute roles={["User"]} children={<Profile/>} />,
  },
  {
    path: "/qrticket/:ticket/",
    element: <QrTicket/>,
  },
  {
    path: "/event-admin",
    element: <EventAdmin /> ,
  },
  {
    path: "/tiers",
    element: <TierAdmin />,
  },
  {
    path: "/categories",
    element: <CategoriesAdmin />
  },
  {
    path: "/users",
    element: <UserAdmin />,
  },
  {
    path: "/organizers",
    element: <OrganizerAdmin />,
  },
  {
    path: "/orders",
    element: <OrderAdmin />,
  },
  {
    path: "/sponsors",
    element: <SponsorAdmin />,
  },
  {
    path: "/statistics",
    element: <GraphicStatistics />,
  },
  {
    path: "/user-roles",
    element: <UserRolesAdmin />
  },
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/setpassword/:email/:firstName/:lastName",
    element: <SetPassword />,
  },
  { 
    path: "/sendemailresetpassword",
    element: <SendEmailResetPassword />,
  },
]);

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'duxqteogb'
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId='937072425265-8jfrguhlts2fdcoo8uo716agsdulveva.apps.googleusercontent.com'>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
      </GoogleOAuthProvider>
  </React.StrictMode>
);
