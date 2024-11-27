/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from './routes/UserRoutes'; // Import the UserRoutes component

function App() {
  // return <UserRoutes />;
  return <RouterProvider router={router} />; // Use UserRoutes as the main routing provider
}

export default App;
