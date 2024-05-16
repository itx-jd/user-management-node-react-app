import './App.css';
import Signup from './components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Dashbaord from './components/Dashbaord';

function App() {

  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/dashboard",
      element: <Dashbaord/>
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
