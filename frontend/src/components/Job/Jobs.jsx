import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/job/jobs", {
          withCredentials: true,
        });
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.length > 0 ? (
            jobs.map((element) => (
              <div className="card" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>Job Details</Link>
              </div>
            ))
          ) : (
            <p>No jobs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
