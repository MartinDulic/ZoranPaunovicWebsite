import React from 'react';
import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage';
import './App.css';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout/>}>
        <Route path='/' element={<IndexPage/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;