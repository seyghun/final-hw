import React from 'react';
import secondFoto from '../images/secondFoto.jpg';
import html from '../images/html-ico.png';
import css from '../images/css-ico.png';
import js from '../images/js-ico.png';
import react from '../images/react-ico.png';
import bootstrap from '../images/bootstrap-ico.png';


const AboutMe = () => {
    return (
        <div className='aboutMe-container'>
            <div className='aboutMe-left-part'>
                <img src={secondFoto} alt="secondFoto" className='secondFoto' />
            </div>
            <div className='aboutMe-right-part'>
                <span className='aboutMe-profile-text'>
                    <h2>Oleksandr Bilenkyi</h2>
                    <p>Young, goal-oriented Junior-Trainee Front-end developer ,
                        who easily finds a common language with strangers and is passionate
                        about creating primarily user-friendly and eye-catching web applications.
                        I have experience with HTML, CSS, Bootstrap, JavaScript, React,
                        but I am ready to continue updating and expanding my knowledge.
                    </p>
                </span>
                <span className='aboutMe-skills-text'>
                    <h2>My Skills :</h2>
                    <div><img className='skills-ico' src={html} alt="html" /><b>HTML -</b> HyperText Markup Language</div>
                    <div><img className='skills-ico' src={css} alt="css" /><b>CSS -</b> Cascading Style Sheets </div>
                    <div><img className='skills-ico' src={js} alt="js" /><b>JS -</b> JavaScript</div>
                    <div><img className='skills-ico' src={bootstrap} alt="bootstrap" /><b>Bootstrap -</b> front-end framework</div>
                    <div><img className='skills-ico' src={react} alt="react" /><b>React -</b> ReactJS</div>
                </span>
            </div>
        </div>
    );
};

export default AboutMe; 