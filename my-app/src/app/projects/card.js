"use client";

import { useState } from "react";
import CardModal from "./cardModal";

export default function Card(props) {
  const { title, description, fullDescription, stack, repoUrl, imgSrc, imgAlt, year } = props;

  const [show, setShow] = useState(false);

  const spreadStack = stack.split(' • ');
  const colors = [
        "bg-primary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info",
        "bg-secondary",
        "bg-dark"
  ];

  return (
    <div 
      className="card h-100 position-relative"
      style={{ 
        backgroundColor: "#D8DCD6",
        border: "3px solid #00E6E6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "1.5rem" // add spacing at top so title is not too close to year
      }}
    >
      {/* Year badge in top-right corner */}
      <span 
        className="position-absolute top-2 end-2 text-white font-semibold px-2 py-1 rounded"
        style={{ 
          backgroundColor: "#083344",
          border: "none"
        }}
      >
        {year}
      </span>

      <div className="card-body text-center">
        <h4 className="card-title font-extrabold mt-3">{title}</h4>
        
        {spreadStack.map((element, index) => (
          <span style={{ marginRight: "10px" }} key={index} className={`badge ${colors[index % colors.length]}`}>
            {element}
          </span>
        ))}
        <br/><br/>
        <p className="card-text">{description}</p>
      </div>
      <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">  
        <button 
          className="btn text-white flex-grow-0" 
          style={{ 
            backgroundColor: "#083344", // dark blue
            border: "none"
          }}
          onClick={() => setShow(true)}
        >
          Details
        </button>
        <a 
          href={repoUrl} 
          className="btn flex-grow-0" 
          style={{ 
            color: "#1E3A8A", // slightly darker blue text
            border: "1px solid #1E3A8A",
            backgroundColor: "#F3F4F6" // light gray background
          }}
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
      <CardModal show={show} setShow={setShow} title={title} fullDescription={fullDescription} spreadStack={spreadStack} colors={colors} repoUrl={repoUrl} imgSrc={imgSrc} imgAlt={imgAlt} />
    </div>
  );
}