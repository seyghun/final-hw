import React from 'react';
import mail from '../images/mail-ico.png';
import phone from '../images/phone-ico.png';
import gps from '../images/gps-ico.png';
import telegram from '../images/telegram-ico.png';
import myFoto from '../images/myphoto.jpg';
import '../styles/mobile.css';

const Info = () => {
    return (
        <div className='main-info-container'>
            <div className='main-info_foto-part'>
                <img src={myFoto} alt="myFoto" className='myFoto' />
            </div>
            <div className='main-info_text-part'>
                <h2>Oleksandr Bilenkyi</h2>
                <p className='position-text'>Junior-Trainee Front-end Developer</p>
                <div className='info-links first-info-link'>
                    <img src={mail} alt="mail" className='info-icons' />
                    <p><i>bilenkyioo@gmail.com</i></p>
                </div>
                <div className='info-links'>
                    <img src={phone} alt="phone" className='info-icons' />
                    <p>+380972910816</p>
                </div>
                <div className='info-links'>
                    <img src={gps} alt="gps" className='info-icons' />
                    <p><i>Khmelnytskyi , Ukraine</i></p>
                </div>
                <div className='info-links'>
                    <img src={telegram} alt="telegram" className='info-icons' />
                    <p><i>@bilenkyioo</i></p>
                </div>
            </div>
        </div>
    );
};

export default Info;