import React from 'react'
import s from './../Content.module.css'
import gitImg from './../../../common/assets/gitImg.png'

export const GithubActivity = (props) => {
    return (
        <div className={s.githubInfo}>
            <h2>Github activity</h2>
            <a href="https://github.com/vladward"><img src={gitImg} alt="activity"/></a>
        </div>
    )
}