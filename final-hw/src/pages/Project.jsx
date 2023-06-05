import React from 'react';
import { projects } from '../lists/projectList';
import { useParams } from "react-router-dom";
import link from '../images/link-ico.png';
import '../styles/main.css';

const Project = () => {
    const { id } = useParams();
    const project = projects[id];
    const projectTech = project.technologies.map(tech => (
        <li className='single-project_tech-item'>{tech}</li>

    ))
    return (
        <main className="single-project_section">
            <div className="single-project_container">
                <div className='single-project_left-part'>
                    <h1 className="single-project_title">{project.title}</h1>

                    <img
                        src={project.imgBig}
                        alt={project.title}
                        className="single-project_img"
                    />
                    <p className='single-project_text'><a className='single-project_link' href={project.URL} >Visit project</a>
                        <img className='link-ico' src={link} alt='link-ico'></img></p>
                </div>
                <div className='single-project_right-part'>
                    <div className='single-project_description'><b className='single-project_description-title'>Description:</b><br></br>{project.description}</div>

                    <div className="single-project_tech-container">
                        <p><b className='used-tech'>Used Technologies:</b></p>
                        <ul className='single-project_tech-list'>
                            {projectTech}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;