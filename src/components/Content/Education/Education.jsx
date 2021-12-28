import React from 'react'
import s from './../Content.module.css'


export const Education = (props) => {
    return (
        <div className={s.education}>
            <h2>Education</h2>
            {props.education && props.education.map(e => {
                return <li key={e.id}>{e.title}</li>
            })}
        </div>
    )
}