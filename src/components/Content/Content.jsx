import React from 'react'
import {useState} from 'react'
import s from './Content.module.css'
import gitImg from './../../common/assets/gitImg.png'
import burger from './../../common/assets/burger.png'
import counter from './../../common/assets/counter.png'
import SN from './../../common/assets/SN.png'
import todo from './../../common/assets/Todolist.png'
import currency from './../../common/assets/currency.png'


export const Content = (props) => {    
    return (
        <div className={s.content}>
            <div className={s.headerText}>
                <h1>{props.aboutMe.name}</h1>
                <h3>{props.aboutMe.profession}</h3>
                <p>{props.aboutMe.description}</p>
            </div>

            <div className={s.workExperience}>
                <h2>Work expirience</h2>
                {props.workExp && props.workExp.map(w => {
                    return <li key={w.id}>{w.title}</li>
                })}
            </div>

            <div className={s.education}>
                <h2>Education</h2>
                {props.education && props.education.map(e => {
                    return <li key={e.id}>{e.title}</li>
                })}
            </div>

            <div className={s.githubInfo}>
                <h2>Github activity</h2>
                <img src={gitImg} alt=""/>
            </div>

            <div className={s.projectItem}>
                <h2>Projects links</h2>
                {props.projects && props.projects.map(p => {
                    return <li key={p.id}>
                        <a href={p.link}>{p.title + ' ' + '-' + ' '}</a>
                        {p.description}
                        {p.wip
                            ? <i style={{color: "gray"}}>(...wip)</i>
                            : ''}
                    </li>
                })}
            </div>
        </div>
    )
}