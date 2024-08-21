import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import FooterMenu from './components/footer/FooterMenu'
import Search from './pages/Search'
import Message from './pages/message/Message'

const router = createBrowserRouter([
  {
    path: "/Instagram-clone-full-stack",
    element: <><Outlet /><FooterMenu /></>,
    children: [
      {
        path: "/Instagram-clone-full-stack",
        element: <Home />
      },
      {
        path : "/Instagram-clone-full-stack/search",
        element : <Search />
      },
      {
        path : "/Instagram-clone-full-stack/messages",
        element : <Message />,
        children : [
          {
            path : "/Instagram-clone-full-stack/messages/general",
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