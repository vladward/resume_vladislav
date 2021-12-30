import React from 'react'
import s from './../Content.module.css'

export const HeaderText = (props) => {
    return (
        <div className={s.headerText}>
            <div className={s.headerTextAboutMe}>
                <h1>{props.aboutMe.name}</h1>
                <h3>{props.aboutMe.profession}</h3>
            </div>
            <p>{props.aboutMe.description}</p>
        </div>
    )
}