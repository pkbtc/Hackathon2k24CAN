import React, { useEffect, useState } from "react";
import JobList from "./SearchFun";
import { getAllJobsMatches, getAllJobs } from "./SearchFun";
import { useRef } from "react";

const URL = "https://test-555cf-default-rtdb.firebaseio.com/jobs.json";

function Home() {
    const dataRef = useRef('');
    const [filters, setFilters] = useState([(a) => true]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const runFilter = (event) => {
        const value = event.target.value.toLowerCase();
        console.log(value);

        getAllJobs().then(jobs => {
            const elements = [];
            for (const key of Object.keys(jobs)) {
                if (jobs[key].title.toLowerCase().startsWith(value))
                    elements.push(<JobList key={key} data={jobs[key]} />);
            }
            setData(elements);
        });
    };

    useEffect(() => {
        getAllJobs()
            .then(jobs => {
                const elements = [];
                for (const key of Object.keys(jobs)) {
                    elements.push(<JobList key={key} data={jobs[key]} />);
                }
                setData(elements);
            });
    }, []); // empty dependency array to run only once on mount

    return (
        <div>
            

            <input id='move' type="search" placeholder="Search Jobs" onKeyDown={runFilter} style={{
                backgroundColor: '#f0f0f0',
                color: 'black',
                borderRadius: '100px',
                borderColor: 'lightgray',
                position: 'relative',
                top: 5,
                left: 0,
                width: '50%',
                height: 50,
                fontSize: 30,
                paddingLeft: 10,
                marginLeft:'400px'
            }} ref={dataRef} />
            <div style={{
                maxHeight: 500,
                paddingLeft: 100,
                paddingTop: 10,
                overflowY: "auto",
            }}>
                {data}
            </div>
        </div>
    );
}

export default Home;
 