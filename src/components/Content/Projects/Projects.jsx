import React from 'react'
import s from './../Content.module.css'


export const Projects = (props) => {
    return (
        <div className={s.projectItem}>
            <h2>{props.projectsTitle}</h2>
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
    )
}