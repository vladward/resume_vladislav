import React from 'react'
import s from './../Aside.module.css'
import ava1 from './../../../common/assets/ava2.png'

export const Header = () => {
    return (
        <div className={s.header}>
            <img src={ava1} alt="avatar"/>
        </div>
    )
}