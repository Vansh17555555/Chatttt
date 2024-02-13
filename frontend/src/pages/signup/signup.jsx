import GenderCheckbox from "./GenderCheckbox"
import { Link } from "react-router-dom"
import { useState } from "react"
import UseSign from "../../hooks/useSign"
function Signup() {
    const {loading,signup}=UseSign()
    const [inputs,setinputs]=useState({
        fullname:'',
        username:'',
        password:'',
        confirmpassword:'',
        gender:''
    })
    const handleCheckboxChange=(gender)=>{
        setinputs({...inputs,gender})        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(inputs)
        await signup(inputs)
    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clop-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3x1 font-semibold text-center text-gray-300">
                Sign Up<span className="text-blue-500">Chatttttt</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
            <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e)=>setinputs({...inputs,username:e.target.value})}
/>
            </div>
            <div>
            <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full input input-bordered h-10"
                value={inputs.fullname}
                onChange={(e)=>setinputs({...inputs,fullname:e.target.value})}
  
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="type Password"
                  className="w-full input input-bordered h-10"
                  value={inputs.password}
                  onChange={(e)=>setinputs({...inputs,password:e.target.value})}
                />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="retype Password"
                  className="w-full input input-bordered h-10"
                  value={inputs.confirmpassword}
                  onChange={(e)=>setinputs({...inputs,confirmpassword:e.target.value})}
                />
            </div>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              Already have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>{loading?<span className="loading loading-spinner"></span>:"Sign Up"}</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
