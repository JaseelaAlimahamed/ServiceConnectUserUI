import { Routes, Route } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes';
import UserLayout from './layouts/UserLayout';
// import'./App.css';
function App() {


  return (
    <Routes>
       <Route path="/*" element={<UserLayout />}>
          <Route path="*" element={<UserRoutes />} />
        </Route>
    </Routes>
  );
}

export default App;
