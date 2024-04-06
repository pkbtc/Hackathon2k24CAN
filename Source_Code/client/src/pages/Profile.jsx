import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Form.css';
const Profile = () => {
    const navigate=useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        age: 0,
        qualification: "",
        skills: ""
    });

    const postData = (e) => {
        const { name, value } = e.target; // Destructure the event object here
        setUserData({ ...userData, [name]: value });
    };

    const submitData = async (e) => {
        e.preventDefault();
        const { name, age, qualification, skills } = userData;
        const res = await fetch("https://test-555cf-default-rtdb.firebaseio.com/userProfile.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age,
                qualification,
                skills,
            })
        });

        if (res.ok) {
            setUserData({ name: "", age: 0, qualification: "", skills: "" });
            alert("Your Profile Craeted Successfully");
            navigate('/jobs');
            
        } else {
            alert("Failed to store data");
        }
    };

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">   
        <a class="navbar-brand" href="#">Job Finder</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
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
          <form class="d-flex justify-content-center" role="search">
            
            <button class="btn btn-outline-success" type="submit" onClick={()=>{navigate('/search') }}>Search</button>
          </form>
        </div>
        
    </nav>
    <div style={{backgroundColor:'black'}}>
      <div className="center">
      <form className="form" onSubmit={submitData}> 
          <fieldset>
              <legend>User Information</legend>
              <label>
                  Name:
                  <input type="text" name="name" value={userData.name} onChange={postData} />
              </label>
              <br />
              <label>
                  Age:
                  <input type="number" name="age" value={userData.age} onChange={postData} />
              </label>
              <br />
              <label>
                  Qualification:
                  <input type="text" name="qualification" value={userData.qualification} onChange={postData} />
              </label>
              <br />
              <label>
                  Skills:
                  <input type="text" name="skills" value={userData.skills} onChange={postData} />
              </label>
              <br />
          </fieldset>
          <button type="submit">Add Data</button>
      </form>
  </div>
  </div>
  </>
  
  
  
    );
};

export default Profile;
