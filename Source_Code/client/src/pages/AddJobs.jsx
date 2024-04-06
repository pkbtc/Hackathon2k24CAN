import React from 'react'
import {useState} from 'react'
import './JobForm.css'
import { useNavigate } from 'react-router-dom'
const AddJobs = () => {
  const navigate=useNavigate();
  const [jobData,setJobData]=useState({
    title:'',
    description:'',
    company:'',
    location:'',
    type:'',
    salary:'',
    skills:''

  });
  const postData=(e)=>{
    const {name,value}=e.target;
    setJobData({...jobData,[name]:value});
  }
  const submitData=async(e)=>{
    e.preventDefault();
    const {title,description,company,location,type,salary,skills}=jobData;
   const res= await fetch("https://test-555cf-default-rtdb.firebaseio.com/jobs.json",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,description,company,location,type,salary,skills


      })
     

    });
    if(res.ok){
      setJobData({title:'',description:'',company:'',location:'',type:'',salary:'',skills:''});
      navigate('/jobs');
      alert("Job Added succesfully");                 

    }
    else{
      alert("fill ")
    }

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
             
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <div style={{backgroundImage: 'client\src\pages\screw-4929711_1280.jpg', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'black' }}>
    <div className="form-container">
        <form onSubmit={submitData} className="job-form">
            <legend>Job Details</legend>
            <label>
                <input type="text" placeholder="Job Title" name="title" value={jobData.title} onChange={postData}/>
            </label>
            <label>
                <input type="text" placeholder='Description' name="description" value={jobData.description} onChange={postData}/>
            </label>
            <label>
                <input type="text" placeholder='Company' name="company" value={jobData.company} onChange={postData}/>
            </label>
            <label>
                <input type="text" placeholder='Location' name="location" value={jobData.location} onChange={postData}/>
            </label>
            <label>
                <input type="text" name="type" placeholder='Type' value={jobData.type} onChange={postData}/>
            </label>
            <label>
                <input type="text" name="salary" placeholder='Salary' value={jobData.salary} onChange={postData}/>
            </label>  
            <label>
                <input type="text" name="skills" placeholder='Skill' value={jobData.skills} onChange={postData}/>
            </label>
            <button style={{ width: '40%', backgroundColor: 'green' }} type='submit'>Add Job</button>

        </form>
    </div>
</div>

    </>
  )
}

export default AddJobs
