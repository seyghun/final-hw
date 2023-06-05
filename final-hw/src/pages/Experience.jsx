import React from 'react';
import { experienceList } from '../lists/experienceList';
import ExperinceCard from '../components/experienceCard/experienceCard';
import '../styles/mobile.css';


const Experience = () => {

    return (
        <div className='experience-section'>
            <div className='experience-container'>
                <ul className='all-experience'>
                    {experienceList.map((experienceList, index) => {
                        return (
                            <ExperinceCard
                                key={index}
                                name={experienceList.name}
                                start={experienceList.start}
                                end={experienceList.end}
                                index={index}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Experience; 