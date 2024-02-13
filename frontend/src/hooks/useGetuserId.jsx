import { useState, useEffect } from 'react';

const useUserIdAfterLogin = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        // Assuming you have a function or API endpoint to get user information after login
        const response = await fetch('/api/user'); // Replace with your API endpoint
        const data = await response.json();

        if (data.userId) {
          setUserId(data.userId);
        } else {
          // Handle the case where userId is not available in the response
          console.error('User ID not found in the response');
        }
      } catch (error) {
        // Handle fetch errors
        console.error('Error fetching user ID:', error);
      }
    };

    // You can trigger the fetchUserId function after successful login
    // For example, you can call fetchUserId() where you handle the login success.

    // Example:
    // const handleLoginSuccess = () => {
    //   // Your login success logic
    //   fetchUserId();
    // };

    // Uncomment the next line if you have a login success handler
    // handleLoginSuccess();

  }, []); // The empty dependency array ensures that this effect runs only once after component mount

  return userId;
};

export default useUserIdAfterLogin;

