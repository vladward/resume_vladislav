import React from 'react'
import s from './Content.module.css'
import {HeaderText} from './HeaderText/HeaderText'
import {WorkExperience} from './WorkExperience/WorkExperience'
import {GithubActivity} from './GithubActivity/GithubActivity'
import {Education} from './Education/Education'
import {Projects} from './Projects/Projects'


export const Content = (props) => {
    return (
        <div className={s.content}>
            <HeaderText aboutMe={props.aboutMe}/>
            <WorkExperience workExp={props.workExp} workExpTitle={props.workExpTitle}/>
            <Education education={props.education} educationTitle={props.educationTitle}/>
            <GithubActivity/>
            <Projects projects={props.projects} projectsTitle={props.projectsTitle}/>
        </div>
    )
}