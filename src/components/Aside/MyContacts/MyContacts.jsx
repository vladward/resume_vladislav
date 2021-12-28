import React from 'react'
import s from './../Aside.module.css'
import mail from './../../../common/assets/mail.png'
import location from './../../../common/assets/location.png'
import linkedin from './../../../common/assets/linkedin.png'
import github from './../../../common/assets/github.png'


export const MyContacts = (props) => {
    return (
        <div className={s.contactItem}>
            <h2>Contacts</h2>
            <div className={s.contactIcon}>
                <img src={mail} alt={props.contacts.mail}/>
            </div>
            <div className={s.contactText}>
                <p>{props.contacts.mail}</p>
            </div>

            <div className={s.contactIcon}>
                <img src={location} alt={props.contacts.location}/>
            </div>
            <div className={s.contactText}>
                <p>{props.contacts.location}</p>
            </div>

            <div className={s.contactIcon}>
                <img src={linkedin} alt={props.contacts.linkedIn}/>
            </div>
            <div className={s.contactText}>
                <a href="https://www.linkedin.com/in/vlad-malohvey-129350219/">{props.contacts.linkedIn}</a>
            </div>

            <div className={s.contactIcon}>
                <img src={github} alt={props.contacts.github}/>
            </div>
            <div className={s.contactText}>
                <a href="https://github.com/vladward">{props.contacts.github}</a>
            </div>
        </div>
    )
}