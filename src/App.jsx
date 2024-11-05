import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home'
import Navbar from './component/Navbar'
import Paste from './component/Paste'
import ViewPaste from './component/ViewPaste'


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/paste",
    element: 
    <div>
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path: "/paste/:id",
    element: 
    <div>
      <Navbar/>
      <ViewPaste/>
    </div>
  },

])

function App() {

  return (
    <div>
      <h2 className='text-3xl font-semibold	 bg-red-900 p-3 rounded-xl'>Note App</h2>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
