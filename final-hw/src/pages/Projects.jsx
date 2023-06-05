import React from 'react';
import ProjectCard from '../components/projectCard/projectCard';
import { projects } from '../lists/projectList';
import '../styles/main.css';
import '../styles/mobile.css';

const Projects = () => {
    return (
        <div className='projects-section'>
            <div className='projects-container'>
                <ul className='all-projects'>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}
                </ul>

            </div>
        </div>
    );
};

export default Projects; 