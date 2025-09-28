// ********* ShopMaster - React Admin Dashboard Website is created by Zpunet ******************
// ********* If you get an error please contact us ******
// ******** Email:info@codemarketi.com *********
// ******** Email:laummassy@gmail.com *********
// ********* Website:www.codemarketi.com *********
// ********* WHATSAPP 👇👇👇👇👇 *********
// ********* Phone:+255 762 352 746 *********
// ********* Youtub Channel: https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w *********

// ******** Support my work with *********
// ********* https://www.patreon.com/zpunet *********
// ********* https://www.buymeacoffee.com/zpunet *********

// ********* This is the main component of the website *********

import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";
import Toast from "./components/Notifications/Toast";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BigLoader from "./components/Notifications/BigLoader";
import Chats from "./screens/Chats/Chats";
import ForgotPassword from "./screens/ForgotPassword ";

import TestPlace from './Testplace';
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import { handleAddAddress } from "./store/addressSlice";
import CategoryProduct from "./ClientLayout/pages/CategoryProduct";
import ProductDetails from "./ClientLayout/pages/ProductDetails";
import Cart from "./ClientLayout/pages/Cart";
import SearchProduct from "./ClientLayout/pages/SearchProduct";
import Success from "./ClientLayout/pages/Success";
import Cancel from "./ClientLayout/pages/Cancel";
import OrderPage from "./ClientLayout/pages/OrderPage";
import Accessories from "./ClientLayout/pages/Accessories";
import ShoppingHome from "./ClientLayout/pages/ShoppingHome";
import Address from "./ClientLayout/pages/Address";
import Account from "./ClientLayout/pages/Account";
import MessagePage from "./ClientLayout/components/MessagePage";
import toast, { Toaster } from "react-hot-toast";
import Profile from "./ClientLayout/pages/Profile";
import OtpVerification from "./ClientLayout/pages/OtpVerification";
import ResetPassword from "./ClientLayout/pages/ResetPassword";
import DashboardUser from "./ClientLayout/pages/DashboardUser";
import Conversation from "./screens/Chats/Coversation";
import AboutUs from "./ClientLayout/pages/AboutUs";
const Dashboard = React.lazy(() => import("./screens/Dashboard"));
const Payments = React.lazy(() => import("./screens/Payments/Payments"));
const Appointments = React.lazy(() => import("./screens/Appointments"));
const Products = React.lazy(() => import("./screens/Product/Products"));
const Users = React.lazy(()=> import("./screens/Users/Users"))

const Campaings = React.lazy(() => import("./screens/Campaings"));
const Invoices = React.lazy(() => import("./screens/Invoices/Invoices"));
const Settings = React.lazy(() => import("./screens/Settings"));
const PatientProfile = React.lazy(() =>import("./screens/Users/PatientProfile"));
const CreateInvoice = React.lazy(() =>import("./screens/Invoices/CreateInvoice"));
const EditInvoice = React.lazy(() => import("./screens/Invoices/EditInvoice"));
const PreviewInvoice = React.lazy(() => import("./screens/Invoices/PreviewInvoice")
);
const NewMedicalRecode = React.lazy(() => import("./screens/Users/NewMedicalRecode"));
const EditPayment = React.lazy(() => import("./screens/Payments/EditPayment"));
const PreviewPayment = React.lazy(() =>import("./screens/Payments/PreviewPayment"));
const Order = React.lazy(() => import("./screens/Order"));
const CreateUser = React.lazy(() =>import("./screens/Users/CreateUser"));
const Admins = React.lazy(() => import("./screens/Admins"));
const NotFound = React.lazy(() => import("./screens/NotFound"));
const Login = React.lazy(() => import("./screens/Login"));
const SignUp = React.lazy(() => import("./screens/SignUp"));
const Reviews = React.lazy(() => import("./screens/Reviews"));
const ClientLayout = React.lazy(()=> import("./ClientLayout/ClientLayout"));
const  Home = React.lazy(()=> import("./ClientLayout/pages/Home"));




function App() {
  Aos.init();

  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)

  const fetchUserDetails = async()=> {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method : SummaryApi.current_user.method,
      credentials : 'include',
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success) {

        dispatch(setUserDetails(dataApi.data))
    }

 
  }



  const fetchUserAddToCart = async()=> {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include',
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
 
  }

 // Function to fetch addresses
const fetchAddress = async () => {
  try {
      const response = await fetch(SummaryApi.allAddress.url, {
          method: SummaryApi.allAddress.method, // Ensure this is the correct method, like 'GET'
          credentials: 'include',
          headers : {
            "content-type" : "application/json"
        },
      });

      if (!response.ok) {
          throw new Error('Failed to fetch address data');
      }

      const responseData = await response.json();

      if (responseData.success) {
          // Dispatch action with fetched data
          dispatch(handleAddAddress(responseData.data));
      } else {
          console.error('Error fetching address data:', responseData.message);
      }
  } catch (error) {
      console.error('Fetch error:', error);
      // You can add toast notifications here
  }
};


  useEffect(()=>{
    /*user details*/
    fetchUserDetails()
    /*user Details cart product*/
    fetchUserAddToCart()
    fetchAddress()
  }, [])

  return (
    <>

      <Context.Provider value={{

        fetchUserDetails, //user detail fetch
        cartProductCount, // current user add to cart product count
        fetchUserAddToCart,
        fetchAddress
      }}>
      {/* Toaster */}
      
      <Toaster position="top-center"/>
      <ToastContainer
        position="top-center"
      />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ClientLayout />}>
        {/* Other routes go inside the Layout */}
        
        <Route
              index
              element={
                <Suspense fallback={<BigLoader />}>
                  <ShoppingHome />
                </Suspense>
              }
            />
          <Route
            path="/collection"
            element={
              <Suspense fallback={<BigLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="dashboard-user"
            element={
              <Suspense fallback={<BigLoader />}>
                <DashboardUser />
              </Suspense>
            }
          >
            
            {/* Nested route for 'my-account' */}
            <Route
              path="my-account"
              element={
                <Suspense fallback={<BigLoader />}>
                  <Profile />
                </Suspense>
              }
            />
             <Route
            path="orders"
            element={
              <Suspense fallback={<BigLoader />}>
                <OrderPage/>
              </Suspense>
            }
          />

          <Route
              path="save-address"
              element={
                <Suspense fallback={<BigLoader />}>
                  <Address />
                </Suspense>
              }
            />
          </Route>
          
          <Route
              path="/login"
              element={
                <Suspense fallback={<BigLoader />}>
                  <Login />
                </Suspense>
              }
            />

          <Route
              path="/forgot-password"
              element={
                <Suspense fallback={<BigLoader />}>
                  <ForgotPassword />
                </Suspense>
              }
            />

          <Route
              path="/verification-otp"
              element={
                <Suspense fallback={<BigLoader />}>
                  <OtpVerification />
                </Suspense>
              }
            />

          <Route
              path="/reset-password"
              element={
                <Suspense fallback={<BigLoader />}>
                  <ResetPassword />
                </Suspense>
              }
            />
            {/* signup */}
            <Route
            path="/signup"
            element={
              <Suspense fallback={<BigLoader />}>
                <SignUp/>
              </Suspense>
            }
          />  

           {/* signup */}
           <Route
            path="/about-us"
            element={
              <Suspense fallback={<BigLoader />}>
                <AboutUs/>
              </Suspense>
            }
          />  

        <Route
            path="/product-category/"
            element={
              <Suspense fallback={<BigLoader />}>
                <CategoryProduct/>
              </Suspense>
            }
          />  

           {/* product details */}
           <Route
            path="/product-details/:id"
            element={
              <Suspense fallback={<BigLoader />}>
                <ProductDetails/>
              </Suspense>
            }
          /> 

        <Route
            path="success"
            element={
              <Suspense fallback={<BigLoader />}>
                <Success/>
              </Suspense>
            }
          />

        <Route
            path="cancel"
            element={
              <Suspense fallback={<BigLoader />}>
                <Cancel/>
              </Suspense>
            }
          />

        <Route
            path="cart"
            element={
              <Suspense fallback={<BigLoader />}>
                <Cart/>
              </Suspense>
            }
          />

          
        <Route
            path="search"
            element={
              <Suspense fallback={<BigLoader />}>
                <SearchProduct/>
              </Suspense>
            }
          />

          <Route
                path="/messages"
                element={
                  <Suspense fallback={<BigLoader />}>
                    <Account />
                  </Suspense>
                }
              >
                <Route
                  path=":userId"
                  element={<MessagePage />}
                />
        </Route> 
          
          </Route>
        
       
       
    
        <Route
            path="/dashboard"
            element={
              <Suspense fallback={<BigLoader />}>
                <Dashboard />
              </Suspense>
            }
          />
         
          {/* invoce */}
          <Route path="invoices">
            <Route
              index
              element={
                <Suspense fallback={<BigLoader />}>
                  <Invoices />
                </Suspense>
              }
            />
            <Route
              path="create"
              element={
                <Suspense fallback={<BigLoader />}>
                  <CreateInvoice />
                </Suspense>
              }
            />
            <Route
              path="edit/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <EditInvoice />
                </Suspense>
              }
            />
            <Route
              path="preview/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <PreviewInvoice />
                </Suspense>
              }
            />
          </Route>

          {/* payments */}
          <Route path="payments">
            <Route
              index
              element={
                <Suspense fallback={<BigLoader />}>
                  <Payments />
                </Suspense>
              }
            />
            <Route
              path="edit/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <EditPayment />
                </Suspense>
              }
            />
            <Route
              path="preview/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <PreviewPayment />
                </Suspense>
              }
            />
          </Route>

          <Route path="users">
            {/* user */}
            <Route
              index
              element={
                <Suspense fallback={<BigLoader />}>
                  <Users />
                </Suspense>
              }
            />

            <Route
              path="preview/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <PatientProfile />
                </Suspense>
              }
            />

          <Route
              path="visiting/:id"
              element={
                <Suspense fallback={<BigLoader />}>
                  <NewMedicalRecode />
                </Suspense>
              }
            />

            <Route
              path="create"
              element={
                <Suspense fallback={<BigLoader />}>
                  <CreateUser />
                </Suspense>
              }
            />

            </Route>

         

           {/* admin */}
           <Route
            path="/admins"
            element={
              <Suspense fallback={<BigLoader />}>
                <Admins />
              </Suspense>
            }
          />
          {/* test */}
          <Route
            path="/testplace"
            element={
              <Suspense fallback={<BigLoader />}>
                <TestPlace/>
              </Suspense>
            }
          />
  
          <Route
            path="/appointments"
            element={
              <Suspense fallback={<BigLoader />}>
                <Appointments />
              </Suspense>
            }
          />
          <Route
            path="/campaigns"
            element={
              <Suspense fallback={<BigLoader />}>
                <Campaings />
              </Suspense>
            }
          />
         
          {/* orders*/}
          <Route
            path="/orders"
            element={
              <Suspense fallback={<BigLoader />}>
                <Order />
              </Suspense>
            }
          />
        
          {/* products*/}
           <Route
            path="/products"
            element={
              <Suspense fallback={<BigLoader />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<BigLoader />}>
                <Settings />
              </Suspense>
            }
          />
          {/* reviews */}
          <Route
            path="/reviews"
            element={
              <Suspense fallback={<BigLoader />}>
                <Reviews />
              </Suspense>
            }
          />
          {/* chats */}
          <Route
            path="/chats"
            element={
              <Suspense fallback={<BigLoader />}>
                <Chats />
              </Suspense>
            }
          >
              <Route
                  path=":userId"
                  element={<Conversation />}
                />


          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<BigLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
