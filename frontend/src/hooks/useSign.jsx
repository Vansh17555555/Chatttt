// UseSign.js
import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";
const useSign = () => {
  const [loading, setLoading] = useState(false);
const {authUser,setAuthUser}=useAuthContext()
  const signup = async ({ fullname, username, password, confirmpassword, gender }) => {
    const success = handleInputErrors({ fullname, username, password, confirmpassword, gender });
    if (!success) return;

    try {
      setLoading(true);
      
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password, confirmpassword, gender }),
      });
      const data = await res.json();
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
      // Handle success, e.g., redirect to login page
      toast.success('Signup successful. Please log in.');
      
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSign;

function handleInputErrors({ fullname, username, password, confirmpassword, gender }) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }
  if (password !== confirmpassword) {
    toast.error('Passwords do not match');
    return false;
  }
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }
  return true;
}
