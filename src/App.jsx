import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPython, FaChartArea, FaChartPie,  FaCss3Alt, FaSchool, FaHtml5} from "react-icons/fa";
import { SiPandas, SiNumpy, SiMysql, SiStreamlit  } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

function App() {
  const [count, setCount] = useState(0)

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)', 
    padding: '20px', 
    borderRadius: '10px', 
    marginBottom: '20px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif'
  };
  
  const cardTextStyle = {
    fontSize: '16px',
    color: 'white',
    margin: '5px 0',
    fontWeight: '400'
  };
  
  const iconStyle = {
    fontSize: '30px', 
    color: '#fff', 
    margin: '10px 0'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: 'white',
    fontWeight: '300',
    marginTop: '10px',
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '10px',
  };
  
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '20px',
  };
  
  const navItemStyle = {
    marginRight: '20px',
  };
  
  const linkStyle = {
    textDecoration: 'none',
  };
  
  const socialiconStyle = {
    fontSize: '40px', 
    color: '#fff', 
    transition: 'transform 0.3s ease, color 0.3s ease',
  };
  
  // const formRef = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // Check if formRef is correctly set
  //   if (formRef.current) {
  //     emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
  //       .then((result) => {
  //         console.log('Email sent successfully!', result.text);
  //         alert("Request submitted successfully");
  //         window.location.href = "/Industries"
  //         e.target.reset(); // Reset form after submission
  //       }, (error) => {
  //         console.error('Error sending email:', error.text);
  //       });
  //   } else {
  //     console.error('Form reference is not set.');
  //   }
  // };

  return (
    <>
    
    <div style={{ fontFamily: 'Open Sans, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 id="name" style={{ fontFamily: 'Montserrat, sans-serif' }}>JEEVA A</h1>
      <h3 id="role" style={{ fontFamily: 'Montserrat, sans-serif', color: '#333' }}>DATA ANALYST</h3>
      <h4 style={{textAlign:"left", color: "wheat", fontFamily: 'Open Sans, sans-serif', fontSize: '18px', lineHeight: '1.6' }}>
        Hi, I’m JEEVA, a detail-oriented Data Analyst with a passion for transforming complex data into actionable insights. With a strong foundation in statistical analysis, data visualization, and data wrangling, I specialize in using data to drive informed business decisions and optimize performance. Additionally, I have some knowledge in front-end development, which allows me to create simple, intuitive visualizations and dashboards. My goal is to turn raw data into clear, meaningful stories that can influence strategy and growth.
      </h4>
    </div> 

     {/* EDUCATION START */}
     <div style={{ fontFamily: 'Open Sans, sans-serif', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        EDUCATION
      </h1>

      <div className="row">
        <div className="col-lg-3">
          <div className="glass-card" id="educations" style={cardStyle}>
            <p style={cardTextStyle}>SSLC</p>
            <FaSchool style={iconStyle} />
            <p style={cardTextStyle}>Springfield Matriculation Higher Secondary School</p>
            <p style={cardTextStyle}>2012-2013</p>
            <p style={cardTextStyle}>77.2%</p>
            <p style={cardTextStyle}>Chennai</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" id="educations" style={cardStyle}>
            <p style={cardTextStyle}>Higher Secondary</p>
            <FaSchool style={iconStyle} />
            <p style={cardTextStyle}>Springfield Matriculation Higher Secondary School</p>
            <p style={cardTextStyle}>2014-2015</p>
            <p style={cardTextStyle}>73.5%</p>
            <p style={cardTextStyle}>Chennai</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" id="educations" style={cardStyle}>
            <p style={cardTextStyle}>B.Sc Computer Science</p>
            <IoIosSchool style={iconStyle} />
            <p style={cardTextStyle}>Guru Nanak College</p>
            <p style={cardTextStyle}>2015-2018</p>
            <p style={cardTextStyle}>CGPA: 6.7</p>
            <p style={cardTextStyle}>Chennai</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" id="educations" style={cardStyle}>
            <p style={cardTextStyle}>MCA</p>
            <IoIosSchool style={iconStyle} />
            <p style={cardTextStyle}>Guru Nanak College</p>
            <p style={cardTextStyle}>2018-2020</p>
            <p style={cardTextStyle}>CGPA: 7.8</p>
            <p style={cardTextStyle}>Chennai</p>
          </div>
        </div>
      </div>
    </div>
     {/* EDUCATION END */}

<hr />

     {/* SKILLS START */}

     <div style={{ fontFamily: 'Open Sans, sans-serif', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        WHAT I DO
      </h1>

      <div className="row">
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <FaHtml5 style={iconStyle} />
            <p style={cardTextStyle}>HTML</p>
            <p style={descriptionStyle}>Building the structure of web pages using semantic HTML5.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <FaCss3Alt style={iconStyle} />
            <p style={cardTextStyle}>CSS</p>
            <p style={descriptionStyle}>Styling web pages with CSS to create responsive and visually appealing designs.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <FaPython style={iconStyle} />
            <p style={cardTextStyle}>PYTHON</p>
            <p style={descriptionStyle}>Versatile programming language for data analysis, automation, and web development.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <SiPandas style={iconStyle} />
            <p style={cardTextStyle}>PANDAS</p>
            <p style={descriptionStyle}>Powerful library for data manipulation and analysis in Python.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <SiNumpy style={iconStyle} />
            <p style={cardTextStyle}>NUMPY</p>
            <p style={descriptionStyle}>Library for numerical operations in Python, including array handling and matrix operations.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <FaChartArea style={iconStyle} />
            <p style={cardTextStyle}>MATPLOTLIB</p>
            <p style={descriptionStyle}>Library for creating static, animated, and interactive visualizations in Python.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <FaChartPie style={iconStyle} />
            <p style={cardTextStyle}>POWER BI</p>
            <p style={descriptionStyle}>Business analytics tool to visualize and share insights from your data.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <SiMysql style={iconStyle} />
            <p style={cardTextStyle}>MYSQL</p>
            <p style={descriptionStyle}>Relational database management system for managing structured data with SQL queries.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <RiFileExcel2Line style={iconStyle} />
            <p style={cardTextStyle}>ADVANCED EXCEL</p>
            <p style={descriptionStyle}>Using Excel for data analysis, pivot tables, macros, and data visualization.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="glass-card" style={cardStyle}>
            <SiStreamlit style={iconStyle} />
            <p style={cardTextStyle}>STREAMLIT</p>
            <p style={descriptionStyle}>Framework to quickly create and deploy interactive data apps with Python.</p>
          </div>
        </div>
      </div>
    </div>

     {/* SKILLS END */}

<hr />

     {/* PROECTS START */}
     <h1 style={{ color: "white" , textAlign:"center"}}>MY PROJECTS</h1>
     
     <div className="row">
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>Project 1</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 2</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 3</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 4</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
</div>
     {/* PROECTS END */}

<hr />
{/* LETS CONNECT START */}

<div style={{ fontFamily: 'Open Sans, sans-serif', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        LET'S CONNECT
      </h1>

      <form action="/action_page.php" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label" style={{ color: 'white' }}>Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" style={inputStyle} />
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label" style={{ color: 'white' }}>Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" style={inputStyle} />
        </div>

        <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
      </form>
    </div>

{/* LETS CONNECT END */}

{/* SOCIAL MEDIA LINKS START */}

<div style={{ fontFamily: 'Open Sans, sans-serif', padding: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        SOCIAL LINKS
      </h1>

      <ol className="nav" id='socialmedias' style={navStyle}>
        <li className="nav-item" style={navItemStyle}>
          <a href="#" className="nav-link" style={linkStyle}>
            <FaGithub style={iconStyle} />
          </a>
        </li>
        <li className="nav-item" style={navItemStyle}>
          <a href="#" className="nav-link" style={linkStyle}>
            <FaLinkedin style={iconStyle} />
          </a>
        </li>
      </ol>
    </div>
{/* SOCIAL MEDIA LINKS END */}
    </>
  )
}

export default App
