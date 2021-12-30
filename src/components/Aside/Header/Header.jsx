import React from 'react'
import s from './../Aside.module.css'
import ava1 from './../../../common/assets/ava2.png'

export const Header = (props) => {
    return (
        <div className={s.header}>
            <img className={s.headerImg} src={ava1} alt="avatar"/>
            <div className={s.headerAboutMe}>
                <h1>{props.aboutMe.name}</h1>
                <h5>{props.aboutMe.profession}</h5>
            </div>
        </div>
    )
}