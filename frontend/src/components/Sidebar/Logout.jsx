import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  // State variable to represent the loading state
  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
