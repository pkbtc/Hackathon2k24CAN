import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import { useState, useEffect } from 'react';


const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const Apply = () => {
        navigate('/Login');
    };

    const search = () => {
        navigate('/search');
    };

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">   
          <a class="navbar-brand" href="/">Job Finder</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
            </div>
            <div class="d-flex justify-content-center">
            <form class="d-flex justify-content-center" role="search"/>
              
            <button class="btn btn-outline-success" type="submit" onClick={() => navigate('/search')}>Search</button>

          </div>
          
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ color: 'black', marginLeft:'120px' }}>Find Part-Time Jobs,Full-Time Jobs and Internships</h2>
            <p style={{ color: 'black', marginLeft:'120px', fontWeight:'bold'}}>Find millions of part-time and full-time jobs we have the best jobs as per your qualification and skills</p>
            <div style={{display: "flex", justifyContent: "center" }}>
            <button style={{  marginLeft: "60px",backgroundColor: 'grey', color: 'black', padding: '10px 20px', border: 'solid black 2px', borderRadius: '5px', cursor: 'pointer', fontWeight:'bold',width:"30%"}} onClick={()=>{navigate('/Login')}}>SignIn</button>
            <button style={{ marginLeft: "20px", backgroundColor: 'grey', color: 'black', padding: '10px 20px', border: 'solid black 2px', borderRadius: '5px', cursor: 'pointer', fontWeight:'bold',width:"30%"}} onClick={()=>{navigate('/Login')}}>Learn More</button>
            </div>
            </div>
          <div className="col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSby0xQ7B9tawlNFyMQPMD0n19Uvj2IgMAo1gamJC9SaA&s" alt="Image Description" style={{ maxWidth: '100%', height: '80%' , marginLeft:'180px' }} />
          </div>
          <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2></h2>
          </div>
          <div>
 
          </div>
        </div>
      </div>
        </>
    )
};

export default Home;
