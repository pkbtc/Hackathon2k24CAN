import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
  const navigate=useNavigate();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch("https://test-555cf-default-rtdb.firebaseio.com/jobs.json");
            
            if (!res.ok) {
                throw new Error("Something went wrong");
            } else {
                const data = await res.json();
                const jobsArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key],
                }));
                setJobs(jobsArray); // Set fetched jobs into state
            }
        } catch (error) {
            console.log("Error in fetching the data", error);
        }
    }

    const removeJob = (id) => {
        setJobs(jobs.filter((job) => job.id !== id));
    }

    return (
      <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Job Finder</a>
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
              
            <button className="btn btn-outline-success" type="button" onClick={() => navigate('/search')}>Search</button>

            </form>
          </div>
        </div>
      </nav>
        <div className="jobs-container">
            <h1 style={{marginLeft:'550px'}}>Available Jobs</h1>
            <div className="jobs-grid">
                {jobs.map(job => (
                    <div key={job.id} className="job-card">
                        <p style={{fontWeight:'bold'}}>Title:       {job.title}</p>
                        <p style={{fontWeight:'bold'}}>Company :    {job.company}</p>
                        <p style={{fontWeight:'bold'}}>Position :   {job.position}</p>
                        <p style={{fontWeight:'bold'}}>Location :   {job.location}</p>
                        <p style={{fontWeight:'bold'}}>Type :       {job.type}</p>
                        <p style={{fontWeight:'bold'}}>Salary :    {job.salary}</p>
                        <p style={{fontWeight:'bold'}}>Skills :     {job.skills}</p>
                        <button style={{width:'40%' ,backgroundColor:'green',color:'white',marginLeft:'31%'}}>Apply</button>
                        <br/>
                        <button style={{width:'40%' ,backgroundColor:'red',color:'white',marginLeft:'31%'}} onClick={() => removeJob(job.id)}>Remove Job</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Jobs;
