import React, {useState} from 'react'
import s from './App.module.css'
import {MainContent} from './components/MainContent/MainContent'
import {PrintVersion} from './components/PrintVersion/PrintVersion'
import {Language} from './components/Aside/Language/Language'

let initialState = {
    aboutMe: {
        name: 'Vladislav Malohvey',
        profession: 'Frontend Developer',
        description: 'Hi. My name is Vladislav. I am a junior frontend developer. ' +
            'I really like working in this field. I know English at a basic level. I have about six months of production development experience and I want to develop further.' +
            ' Calm and balanced, a great desire to learn new technologies. I will be glad to talk.',
    },
    contacts: {
        mail: 'vladward13@gmail.com',
        location: 'Minsk, Belarus',
        linkedIn: 'LinkedIn account',
        github: 'Github account'
    },
    contactsTitle: 'Contacts:',
    workingWith: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'Javascript'},
        {id: 4, title: 'React'},
        {id: 5, title: 'Redux'},
        {id: 6, title: 'Typescript'},
        {id: 7, title: 'Git'},
        {id: 8, title: 'Material UI'},
        {id: 9, title: 'Antd'},
        {id: 10, title: 'Storybook'},
        {id: 11, title: 'Jest'},
        {id: 12, title: 'TDD'},
        {id: 13, title: 'Postman'},
        {id: 14, title: 'BEM'},
    ],
    workingWithTitle: 'Working with:',
    interests: [
        {id: 1, title: 'Web Development'},
        {id: 2, title: 'Video Games'},
        {id: 3, title: 'Cars'},
        {id: 4, title: 'Travel'},
    ],
    interestsTitle: 'Interests:',
    work: [
        {
            id: 1,
            title: 'System administrator -  Health care institution “Shchuchin Central District Hospital” (2014 - 2016)'
        },
        {id: 2, title: 'Driver - Logistics transport company (2016 - 2021)'},
        {id: 3, title: 'Junior React developer (2021 - present)'},
    ],
    workTitle: 'Work Experience:',
    education: [
        {
            id: 1,
            title: 'Information technology software Technological College Educational Institution "The Yanka Kupala State University of Grodno" (2010 - 2014)'
        },
        {id: 2, title: 'Front-end React developer - It-incubator.by (2021/09 - 2022/02)'},
    ],
    educationTitle: 'Education:',
    projects: [
        {
            id: 1,
            link: 'https://vladward.github.io/burger-vlad/',
            title: 'Burger',
            description: 'Simple and fun website create by HTML, CSS and JS',
            wip: false
        },
        {
            id: 2,
            link: 'https://vladward.github.io/TO_DO/',
            title: 'Todolist',
            description: 'Web application with React, TypeScript and Redux, Storybook',
            wip: true
        },
        {
            id: 3,
            link: 'https://vladward.github.io/currency_exchange/',
            title: 'Currency exchange',
            description: 'Web application with React, Typescript, Redux, React-redux',
            wip: false
        },
        {
            id: 4,
            link: 'https://vladward.github.io/counter/',
            title: 'Counter',
            description: 'Web application with React, TypeScript and Redux',
            wip: false
        },
        {
            id: 5,
            link: 'https://vladward.github.io/sn-app/',
            title: 'Social Network',
            description: 'Create by React, Redux, Typescript',
            wip: true
        },
    ],
    projectsTitle: 'Projects Links:'
}
let ruInitialState = {
    aboutMe: {
        name: 'Владислав Малохвей',
        profession: 'Frontend Developer',
        description: 'Привет. Меня зовут Владислав. Я младший фронтенд разработчик. ' +
            'Мне очень нравится работать в этой сфере. Знаю английский язык на базовом уровне.' +
            ' Имею опыт продакшн разработки около полугода и хочу развиваться дальше. Спокойный и уравновешенный, ' +
            'большое желание учиться новым технологиям. Буду рад пообщаться.',
    },
    contacts: {
        mail: 'vladward13@gmail.com',
        location: 'Минск, Беларусь',
        linkedIn: 'LinkedIn аккаунт',
        github: 'Github аккаунт'
    },
    contactsTitle: 'Контакты:',
    workingWith: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'Javascript'},
        {id: 4, title: 'React'},
        {id: 5, title: 'Redux'},
        {id: 6, title: 'Typescript'},
        {id: 7, title: 'Git'},
        {id: 8, title: 'Material UI'},
        {id: 9, title: 'Antd'},
        {id: 10, title: 'Storybook'},
        {id: 11, title: 'Jest'},
        {id: 12, title: 'TDD'},
        {id: 13, title: 'Postman'},
        {id: 14, title: 'BEM'},
    ],
    workingWithTitle: 'Работал с: ',
    interests: [
        {id: 1, title: 'Веб разработка'},
        {id: 2, title: 'Видео игры'},
        {id: 3, title: 'Автомобили'},
        {id: 4, title: 'Путешествия'},
    ],
    interestsTitle: 'Интересы:',
    work: [
        {
            id: 1,
            title: 'Системный администратор - Учреждение здравоохранения "Щучинская центральная районная больница (2014 - 2016)"'
        },
        {id: 2, title: 'Водитель - Логистическая транспортная компания (2016 - 2021)'},
        {id: 3, title: 'Младший React разработчик (2021 - настоящее время)'},
    ],
    workTitle: 'Опыт работы:',
    education: [
        {id: 1, title: 'Гродненский Химико-Технологический колледж имени Янки Купалы (2010 - 2014)'},
        {id: 2, title: 'Фронтенд Инкубатор It-incubator.by (2021/09 - 2022/02)'},
    ],
    educationTitle: 'Образование:',
    projects: [
        {
            id: 1,
            link: 'https://vladward.github.io/burger-vlad/',
            title: 'Бургер',
            description: 'Простой и веселый сайт о бургерах созданный при помощи HTML, CSS и Javascript',
            wip: false
        },
        {
            id: 2,
            link: 'https://vladward.github.io/TO_DO/',
            title: 'Список дел',
            description: 'Веб-приложение разработанное с помощью React, Typescript, Redux и Storybook',
            wip: true
        },
        {
            id: 3,
            link: 'https://vladward.github.io/currency_exchange/',
            title: 'Обмен валюты',
            description: 'Веб-приложение разработанное с помощью React, Typescript, Redux и React-Redux',
            wip: false
        },
        {
            id: 4,
            link: 'https://vladward.github.io/counter/',
            title: 'Счетчик',
            description: 'Веб-приложение разработанное с помощью React, Typescript и Redux',
            wip: false
        },
        {
            id: 6,
            link: 'https://vladward.github.io/sn-app/',
            title: 'Социальная сеть',
            description: 'Создана при помощи библиотек React, Redux и Typescript',
            wip: true
        },
    ],
    projectsTitle: 'Ссылки на проекты:'
}

export const App = () => {
    const [lang, setLang] = useState(false)
    const [profileData, setProfileData] = useState({...initialState})
    const [profileRuData, setProfileRuData] = useState({...ruInitialState})
    const [printMode, setPrintMode] = useState(false)

    let state = lang ? profileRuData : profileData

    return (
        <div className={s.wrapp}>
            <header className={s.head}>
                <Language setLang={setLang}/>
                <button onClick={() => setPrintMode(!printMode)}>{printMode ? 'Resume Version' : 'Pdf Version'}</button>
            </header>
            {printMode && <PrintVersion lang={lang}/>}
            {!printMode && <MainContent
                setLang={setLang}
                aboutMe={state.aboutMe}
                contacts={state.contacts}
                contactsTitle={state.contactsTitle}
                workWith={state.workingWith}
                workWithTitle={state.workingWithTitle}
                interests={state.interests}
                interestsTitle={state.interestsTitle}
                aboutMe={state.aboutMe}
                aboutMeTitle={state.aboutMeTitle}
                workExp={state.work}
                workExpTitle={state.workTitle}
                education={state.education}
                educationTitle={state.educationTitle}
                projects={state.projects}
                projectsTitle={state.projectsTitle}/>}
        </div>
    )
}
