import React from 'react'
import s from './../Aside.module.css'

export const MyInterests = (props) => {
    return (
        <div className={s.interests}>
            <h2>{props.interestsTitle}</h2>
            {props.interests.map(i => <p key={i.id}>{!props.changeLang ? i.title : i.titleRu}</p>)}
        </div>
    )
}