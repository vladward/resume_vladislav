import React from 'react'
import s from './Aside.module.css'
import avatar from './../../common/assets/avatar.JPG'
import mail from './../../common/assets/mail.png'
import location from './../../common/assets/location.png'
import linkedin from './../../common/assets/linkedin.png'
import github from './../../common/assets/github.png'

export const Aside = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img src={avatar} alt=""/>
            </div>

            <div className={s.contactItem}>
                <h2>Contacts</h2>
                <div className={s.contactIcon}>
                    <img src={mail} alt="mail"/>
                </div>
                <div className={s.contactText}>
                    <p>vladward13@gmail.com</p>
                </div>

                <div className={s.contactIcon}>
                    <img src={location} alt="location"/>
                </div>
                <div className={s.contactText}>
                    <p>Minsk, Belarus</p>
                </div>

                <div className={s.contactIcon}>
                    <img src={linkedin} alt="linkedin"/>
                </div>
                <div className={s.contactText}>
                    <a href=" https://www.linkedin.com/in/vlad-malohvey-129350219/">Linkedin account</a>
                </div>

                <div className={s.contactIcon}>
                    <img src={github} alt="github"/>
                </div>
                <div className={s.contactText}>
                    <a href="https://github.com/vladward">Github account</a>
                </div>
            </div>

            <div className={s.skills}>
                <h2>Working with:</h2>
                <div className={s.skillBlock}>
                    <div>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Typescript</p>
                    </div>
                    <div>
                        <p>MUI</p>
                        <p>ANTD</p>
                        <p>Jest</p>
                        <p>Postman</p>
                        <p>BEM</p>
                        <p>TDD</p>
                    </div>
                </div>
            </div>

            <div className={s.interests}>
                <h2>Interests:</h2>
                <p>WEB Development</p>
                <p>Video Games</p>
                <p>Cars</p>
                <p>Travel</p>
            </div>
        </div>


    )
}