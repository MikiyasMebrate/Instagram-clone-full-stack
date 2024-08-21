import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import FooterMenu from './components/footer/FooterMenu'
import Search from './pages/Search'
import Message from './pages/message/Message'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Outlet /><FooterMenu /></>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path : "/search",
        element : <Search />
      },
      {
        path : "/messages",
        element : <Message />,
        children : [
          {
            path : "/messages/general",
            element : <Message />
          }
        ]
      }
    ]
  },
])

const App = () => {

  return (
    <div className='bg-black min-h-screen md:w-1/4 '>
      <div className='w-full'> <RouterProvider router={router} /></div>
    </div>
  )
}

export default App