import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
const useGetConversations = () => {
    const [loading,setLoading]=useState(false);
    const [conversation,setConversation]=useState([]);
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true)
            try{
                const res=await fetch(`http://localhost:3000/api/users`)
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversation(data);
            }
        
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        getConversations();

    },[]);
    return {loading,conversation}
}

export default useGetConversations
