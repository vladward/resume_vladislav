import React from 'react'
import s from './../Content.module.css'


export const WorkExperience = (props) => {
    return (
        <div className={s.workExperience}>
            <h2>{props.workExpTitle}</h2>
            {props.workExp && props.workExp.map(w => {
                return <li key={w.id}>{w.title}</li>
            })}
        </div>
    )
}

