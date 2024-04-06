import React from 'react'
import { useNavigate } from 'react-router-dom'

const Fail = () => {
    const navigate=useNavigate();

  return (
   <>
   <h1 style={{color:'red'} }>Password or Email is Incorrect</h1>
   <button onClick={()=>navigate('/')}>Login Again</button>
   <button onClick={()=>navigate('/signup')}>SignUp</button>
   </>
  )
}

export default Fail