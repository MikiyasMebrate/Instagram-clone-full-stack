import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />
  }
])

const App = () =>{
  
  return (
  <div className='bg-black min-h-screen'>
      <RouterProvider router={router} />
  </div>
  )
}

export default App