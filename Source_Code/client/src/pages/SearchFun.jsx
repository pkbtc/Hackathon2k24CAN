const URL = "https://test-555cf-default-rtdb.firebaseio.com/jobs.json"
 
function JobList(prop) {
    const data = prop.data
 
    return <div style={{
        borderStyle: "solid",
        paddingTop: 10,
        // display: 'flex', /* Use flexbox layout */
        // flexDirection: "row"
        margin: 'auto',
        marginBottom: 10
    }}>
 
        <h2 style={{
            marginRight: "80%",
 
        }}>{data.title}</h2>
 
        <h6 style={{
            marginRight: "80%"
        }}>at: {data.location}</h6>
        <h6 style={{
            marginRight: '80%'
        }}>by {data.company}</h6>
 
 
        <br/>
        {<p>{data.description}</p>}
        <br/>
        <p>Salary: {data.salary}</p>
    </div>
}
 
 export async function getAllJobs() {
    return await fetch(URL)
        .then(res => res.json())
}
 
export function getAllJobsMatches(search) {
    const jobs = []
    for (let job in getAllJobs()) {
        const jobDetail = job[Object.keys(job)]
        if (jobDetail.skills.startsWith(search))
            jobs.add(jobDetail)
    }
    return getAllJobs().filter(job => job.skills.startsWith(search))
}
 
//TODO Test
 
export default JobList