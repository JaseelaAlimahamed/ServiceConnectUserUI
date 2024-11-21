/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from './routes/UserRoutes'; // Import the UserRoutes component

<<<<<<< HEAD
function App() {
  // return <UserRoutes />;
  return <RouterProvider router={router} />; // Use UserRoutes as the main routing provider
=======

  return (
    <Routes>
      <Route path="/*" element={<UserRoutes/>} />
    </Routes>
  );
>>>>>>> main
}

export default App;
