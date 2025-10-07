"use client";

import { useState } from "react";
import CardModal from "./cardModal";

export default function CardV2(props) {
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
    <div className="project-card" onClick={() => setShow(true)}>
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="year-badge">{year}</span>
      </div>
      <p className="project-description">
          {description}
      </p>
      <div className="project-tags">
          {spreadStack.map((element, index) => (
            <span style={{ marginRight: "10px" }} key={index} className={`badge ${colors[index % colors.length]}`}>
              {element}
            </span>
          ))}
      </div>
      <CardModal show={show} setShow={setShow} title={title} fullDescription={fullDescription} spreadStack={spreadStack} colors={colors} repoUrl={repoUrl} imgSrc={imgSrc} imgAlt={imgAlt} />
    </div>
  );
}