import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import './app.scss'
const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Footer/>
    </div>
  )
}
function App() {
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
    
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      
    ]
  }
])
  return <div>
        <RouterProvider router={router} />
  </div>;
}

export default App;
