"use client";

import {projects} from "@/app/data/projects";
import Card from "./projects/card";
import CustomImage from "CustomImage";

export default function Home() {

    return (
        <>
            <div className="font-sans flex flex-col p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-8 items-center w-full overflow-auto">
                    <div className="bio-text text-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-auto">
                                    <CustomImage
                                        className="rounded-full brightness-100 opacity-100 border-4 border-[#00E6E6]"
                                        src="/img/profile_pic.jpeg"
                                        alt="Next.js logo"
                                        width={180}
                                        height={180}
                                        priority
                                    />
                                </div>
                                <div className="col-sm-auto">
                                    <h1 style={{color: "#00FFFF"}}><b><b>Diogo</b></b> Alpendre</h1>
                                    <h4 className="bio-text text-cyan-700">Full-Stack Developer</h4>
                                    <h5><b style={{color: "#00FFFF"}}>2 years</b> of professional experience</h5>
                                    <br/>
                                    <div className="row">
                                        <div className="col-auto">
                                            <CustomImage
                                                className="brightness-120 opacity-100"
                                                src="/img/js-logo.png"
                                                alt="Javascript logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <CustomImage
                                                className="brightness-120 opacity-100"
                                                src="/img/react.png"
                                                alt="Next.js logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <CustomImage
                                                className="brightness-120 opacity-100"
                                                src="/img/java-logo-v2.png"
                                                alt="Java logo"
                                                width={75}
                                                height={75}
                                                priority
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <CustomImage 
                                                className="brightness-120 opacity-100"
                                                src="/img/spring-boot-rect-v2.png"
                                                alt="Spring Boot logo"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                        </div>  
                                        <div className="col-auto">
                                            <CustomImage 
                                                className="brightness-120 opacity-100"
                                                src="/img/csharp-logo-v2.png"
                                                alt="Spring Boot logo"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                              <div className="row align-items-left text-white mb-3">
                                <div className="col lg-3 flex items-center">
                                    <h4 className="relative z-50 cursor-pointer text-left text-white no-underline mr-4">
                                        👨‍💻 About me
                                    </h4>
                                    <div className="col lg-6 w-100 border-t-2" style={{color: "#00FFFF"}}></div>
                                </div>
                                <p className="text-justify">
                                    I am a software developer with nearly two years of experience specializing in 
                                    <span className="font-bold" style={{color: "#00FFFF"}}> full-stack development</span> using 
                                    <span className="font-bold" style={{color: "#00FFFF"}}> React</span> and 
                                    <span className="font-bold" style={{color: "#00FFFF"}}> Spring Boot</span>.
                                </p>
                                <p className="text-justify">
                                    Over the past 2 years, I have contributed to a <span className="font-bold" style={{color: "#00FFFF"}}>critical software system </span>
                                    for <span className="font-bold" style={{color: "#00FFFF"}}>organ transplantation management</span> in Saudi Arabia, 
                                    supporting both <b style={{color: "#00FFFF"}}>donation</b> and <b style={{color: "#00FFFF"}}>transplantation</b> processes.
                                </p>
                                <p className="text-justify">
                                    My work focuses on creating efficient, user-friendly applications that help streamline 
                                    complex medical operations, ensuring smooth coordination between healthcare providers 
                                    and transplant organizations.
                                </p>
                              </div>
                              <div className="row align-items-left mb-3">
                                <div className="col lg-3 flex items-center">
                                    <h4 className="relative z-50 cursor-pointer text-left text-white no-underline mr-4">
                                        👨‍💻 My Projects
                                    </h4>
                                    <div className="col lg-6 w-100 border-t-2" style={{color: "#00FFFF"}}></div>
                                </div>
                              </div>
                              <div className="row align-items-left">
                                {
                                  projects.map((project) => (
                                  <div className="col-sm-3 mb-3" key={project.id}>
                                    <Card title={project.title} description={project.description} fullDescription={project.fullDescription} stack={project.stack}
                                        repoUrl={project.repoUrl} imgSrc={project.imgSrc} imgAlt={project.imgAlt} year={project.year} />
                                  </div>
                                ))}
                              </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}