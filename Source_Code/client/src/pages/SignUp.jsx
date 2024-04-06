import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const reponse=await fetch("http://localhost:3000/signUp",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })



            })
            const data=await reponse.json();
            if(data.status===200){
               navigate('/');
            }
           
        }
        catch(error){
            console.log(error);
        }
        
    };

    return (
        <>
        <>
        <h1 style={{ textAlign: 'center', color: 'blue', marginBottom: '20px' }}>SignUp</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '10px' }}>Email:</label>
            <input type='email' placeholder='Email' style={{ width: '30%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <label style={{ marginBottom: '10px' }}>Password:</label>
            <input type='password' placeholder='Password' style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' style={{ backgroundColor: 'blue', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '12px', border: 'none' }}>SignUp</button>
        </form>
    </>
    
        </>
    );
};

export default SignUp;

