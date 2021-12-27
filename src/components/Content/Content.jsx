import React from 'react'
import s from './Content.module.css'
import gitImg from './../../common/assets/gitImg.png'
import burger from './../../common/assets/burger.png'
import counter from './../../common/assets/counter.png'
import SN from './../../common/assets/SN.png'
import todo from './../../common/assets/Todolist.png'


export const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.headerText}>
                <h1>Vladisalv Malohvey</h1>
                <h3>Front-end developer</h3>
                <p>its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making
                    it look like readable English. </p>
            </div>

            <div className={s.workExpirience}>
                <h2>Work expirience</h2>
                <li>
                    System administrator
                    Health care institution “Shchuchin Central District Hospital” (2014 - 2016)
                </li>
                <li>
                    Driver
                    Logistics transport company (2016 - 2021)
                </li>
                <li>
                    Junior React developer (2021 - present)
                </li>
            </div>

            <div className={s.education}>
                <h2>Education</h2>
                <li>
                    Information technology software
                    Technological College Educational Institution "The Yanka Kupala State University of Grodno" (2010 -
                    2014)
                </li>
                <li>
                    Front-end React developer - It-incubator.by (2021/09 - 2022/02)
                </li>
            </div>

            <div className={s.githubInfo}>
                <h2>Github activity</h2>
                <img src={gitImg} alt=""/>
            </div>

            <div className={s.projects}>
                <div className={s.projectBlock}>
                    <div className={s.projectItem}>
                        <h5>Burgers site with HTML, CSS and JS</h5>
                        <a href="https://vladward.github.io/burger-vlad/">
                            <img className={s.burger} src={burger} alt="burger"/>
                        </a>
                    </div>
                    {/*<div className={s.projectItem}>*/}
                    {/*    <h3>Social network with React, Typescript, Redux</h3>*/}
                    {/*    <img src={SN} alt="sn"/>*/}
                    {/*</div>*/}
                    <div className={s.projectItem}>
                        <h5>Todolist with React, Typescript, Redux and MUI</h5>
                        <a href="https://vladward.github.io/todo/">
                            <img className={s.todo} src={todo} alt="todo"/>
                        </a>
                    </div>
                    <div className={s.projectItem}>
                        <h5>Counter application with React, Typescript, Redux</h5>
                        <a href="https://vladward.github.io/counter/">
                            <img className={s.counter} src={counter} alt="counter"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}