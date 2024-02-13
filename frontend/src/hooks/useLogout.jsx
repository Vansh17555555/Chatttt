import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

function useLogout() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
        const res = await fetch('http://localhost:3000/api/auth/logout', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}

export default useLogout;
