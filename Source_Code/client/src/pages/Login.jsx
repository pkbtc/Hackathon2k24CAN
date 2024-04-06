import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app from './fire'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const Login = () => {
    const navigate=useNavigate();
    const auth = getAuth(app);
    const provider=new GoogleAuthProvider();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
            
        })
        const data=await res.json();
        if(data.status===200){
            navigate('/profile');
        }
        else{
            navigate('/fail');
        }
    }
    const sign=()=>{
        navigate('/signup');
    }
    const signG=async()=>{
       await  signInWithPopup(auth, provider).then(async()=>{
        await navigate('/profile');
       });
        
    }

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Job Finder</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/  ">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Login" style={{color:'black'}}>Apply</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add" style={{color:'black'}}>Add Jobs</a>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
              About Us
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Testimonials</a></li>
              <li><a class="dropdown-item" href="#">Partners</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Contact</a></li>
            </ul>
          </li>
          
        </ul>
        <form class="d-flex" role="search">

          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div style={{ textAlign: 'center', marginTop: '50px' ,color:'black'}}>
    <h1 style={{ color: 'blue', marginBottom: '20px' }}>Login</h1>
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}></label>
        <input type='email' placeholder='Email' style={{ width: '20%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <label style={{ display: 'block', marginBottom: '5px' }}></label>
        <input type='password' placeholder='Password' style={{ width: '20%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc',}} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' style={{ width: '10%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', marginBottom: '10px' ,marginLeft:'614px'}}>Login</button>
    </form>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={sign} style={{ width: "10%", padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', marginBottom: '10px' }}>SignUp</button>
        
        <button onClick={signG} style={{ width:'10%' ,padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Sign In with Google</button>
    </div>
</div>




</>
  )
}

export default Login
