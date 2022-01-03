import React from 'react'
import s from './MainContent.module.css'
import {Aside} from './../Aside/Aside'
import {Content} from './../Content/Content'

export const MainContent = (props) => {
    return (
        <div className={s.MainContent}>
            <div className={s.asideContainer}>
                <Aside setLang={props.setlang}
                       aboutMe={props.aboutMe}
                       contacts={props.contacts}
                       contactsTitle={props.contactsTitle}
                       workWith={props.workWith}
                       workWithTitle={props.workWithTitle}
                       interests={props.interests}
                       interestsTitle={props.interestsTitle}
                />
            </div>
            <div className={s.contentContainer}>
                <Content aboutMe={props.aboutMe}
                         aboutMeTitle={props.aboutMeTitle}
                         workExp={props.workExp}
                         workExpTitle={props.workExpTitle}
                         education={props.education}
                         educationTitle={props.educationTitle}
                         projects={props.projects}
                         projectsTitle={props.projectsTitle}
                />
            </div>
        </div>
    )
}