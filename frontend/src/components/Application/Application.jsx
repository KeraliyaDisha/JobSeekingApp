import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Application() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  const handleFileChange = (e) => {
    const resume = e.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/postapplication",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.message.data.message);
    }
  };
  useEffect(() => {
    if (!isAuthorized || (user && user.role === "Employer")) {
      navigateTo("/");
    }
  }, [isAuthorized, user, navigateTo]);
  () => {
    if (!isAuthorized || (user && user.role === "Employer")) {
      navigateTo("/");
    }
  },
    [isAuthorized, user, navigateTo];

  return (
    <>
      <section className="application">
        <div className="container">
          <h3>Application Form</h3>
          <form onSubmit={handleApplication}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Cover Letter"
            />
            <div>
              <label
                style={{
                  textAlign: "start",
                  display: "block",
                  fontSize: "20PX",
                }}
              >
                Select Resume
              </label>
              <input
                type="file"
                accept=".jpg, .png, .webp"
                onChange={handleFileChange}
                style={{ width: "100%" }}
              />
              <button type="submit">Send Application</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Application;
