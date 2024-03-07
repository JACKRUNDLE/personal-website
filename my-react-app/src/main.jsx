import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Root from "./routes/root";
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./HomePage/homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ height: '100vh' , width: '100vw'}}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </div>
  </React.StrictMode>
);
