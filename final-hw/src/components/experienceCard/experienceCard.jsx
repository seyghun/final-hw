import React from 'react';
import './experienceCard.css';

const ExperinceCard = ({ name, start, end }) => {
    return (
        <span className='experience-card-container'>
            <div className='experience-card_title-div'>
                <h2 className='experience-card-title'>{name}</h2>
                <span className='experience-card_text-container'>
                    <p className='experience-card-text'>{start}</p>
                    <p className='experience-card-text'>{end}</p>
                </span>
            </div>
        </span>
    );
};

export default ExperinceCard;