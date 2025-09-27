import Card from "./card";

import {projects} from "@/app/data/projects";

export default function Projects() {
    return (
    <>
      <div className="container">
        <div className="row row-cols-3 g-4">
          <button id="portfolio-back"><strong><i className="fa fa-arrow-left relative z-50" aria-hidden="true"></i> GO BACK</strong></button>
        </div>
        <div className="row row-cols-3 g-4">
          {
            projects.map((project) => (
            <div className="col" key={project.id}>
              <Card title={project.title} description={project.description} fullDescription={project.fullDescription} stack={project.stack} repoUrl={project.repoUrl} 
                imgSrc={project.imgSrc} imgAlt={project.imgAlt} />
            </div>
          ))}
        </div>
      </div>
    </>
    )
}
