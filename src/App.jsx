import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'
import IndexPage from './pages/IndexPage'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout/>} >
        <Route path='/' element={<IndexPage/>}/>
      </Route>

      {/* Routes with NoFooterLayout */}
      {/* <Route element={<NoFooterLayout />}>
        <Route path='/contact' element={<ContactPage />} />
      </Route> */}

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
