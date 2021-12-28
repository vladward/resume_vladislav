import React from 'react'
import s from './../Aside.module.css'

export const MySkills = (props) => {
    return (
        <div className={s.skills}>
            <h2>Working with:</h2>
            <div className={s.skillBlock}>
                <ul>{props.workWith.map(w => {
                    if (w.id <= 7) {
                        return <li key={w.id}>{w.title}</li>
                    }
                })}</ul>
                <ul>{props.workWith.map(w => {
                    if (w.id > 8) {
                        return <li key={w.id}>{w.title}</li>
                    }
                })}</ul>
            </div>
        </div>
    )
}