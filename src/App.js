import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Housings from './pages/Housings';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logements/:id",
        element: <Housings />,
        errorElement: <Error />,
      }

    ]
  }
])
function App() {
  return <RouterProvider router={router}/>

}

export default App;
