import { redirect } from 'react-router-dom';

export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Example: Replace this with actual authentication logic
};

export const protectRoute = () => {
  if (!isAuthenticated()) {

    return redirect('/sign-in'); 
  }
  
  return null; 
}

