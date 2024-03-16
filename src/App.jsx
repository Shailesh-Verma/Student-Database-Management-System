//! V-5 version
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Errorpage from './Errorpage'
// import Home from './Home'
// import Layout from './Layout'
// import SingleStudent from './SingleStudent'
// import Update from './Update'
// import ViewAll from './ViewAll'

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Layout/>}>
//              <Route index element={<Home/>}/>
//              <Route path="/view" element={<ViewAll/>}/>
//              <Route path="/singlestu/:id" element={<SingleStudent/>}/>
//              <Route path="*" element={<Errorpage/>}/>
//              <Route path="/edit/:id" element={<Update/>}/>
//         </Route> 
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App

//! V-6 version

import Errorpage from './Errorpage'
import Home from './Home'
import Layout from './Layout'
import SingleStudent from './SingleStudent'
import Update from './Update'
import ViewAll from './ViewAll'

import React from 'react' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
let x=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/view',
        element:<ViewAll />
      },
      {
        path:'*',
        element:<Errorpage />
      },
      {
        path:"/singlestu/:id",
        element:<SingleStudent/>
      },
      {
        path:"/edit/:id",
        element:<Update/>
      }
    ] 
  }
])
const App = () => {
  return (
    <>
    <div>
      <Toaster/>
    </div>
    <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App

