import React from 'react';
import './projectCard.css';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ title, img, index }) => {
    return (
        <span className='project-card-container'>
            <NavLink to={`/project/${index}`}><img src={img} alt={title} className='project-card_img' /></NavLink>
            <div className='project-card_title-div'><h2 className='project-card-title'>{title}</h2></div>
        </span>
    );
};

export default ProjectCard;