import React from 'react'
import s from './Aside.module.css'
import {MyContacts} from './MyContacts/MyContacts'
import {MySkills} from './MySkills/MySkills'
import {MyInterests} from './MyInterests/MyInterests'
import {Header} from './Header/Header'
import {Language} from './Language/Language'

export const Aside = (props) => {    
    return (
        <div className={s.wrapper}>
            <Header/>
            <Language  setLang={props.setLang}/>
            <MySkills workWith={props.workWith}/>
            <MyInterests interests={props.interests}/>
            <MyContacts contacts={props.contacts}/>
        </div>
    )
}