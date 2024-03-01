import './App.css';
import Head from './Components/Head';
import {
    createBrowserRouter,
    RouterProvider,
  
  } from "react-router-dom";
  import { Outlet } from 'react-router-dom';
import General from './pages/General';
import Pricing from './pages/Pricing';
import Targetings from './pages/Targetings';
import Addvanced from './pages/Addvanced';
import Context from './Context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  // this is a layout of main pages
  const Layout=()=>{
    return (
      <>
 <ToastContainer/>
      <div className='main p-2 flex flex-col gap-4  '>
        <h1 className='text-gray-800 '>Create Campaign</h1>
        <Head/>
        <div className="child sm:p-5 ">
           <Outlet/>

        </div>

      </div>
      
      
      
      </>
    )
  };


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<General/>
      },
      {
        path:"/pricing",
        element:<Pricing/>
      },
      {
        path:"/targettings",
        element:<Targetings/>
      },
      {
        path:"/settings",
        element:<Addvanced/>
      }
    ]
  }
])


  return (
   <>

<Context>

<RouterProvider router={router} />
</Context>


   
   
   
   </>
  );
}

export default App;
