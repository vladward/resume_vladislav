import React, {useState} from 'react'
import s from './App.module.css';
import {Aside} from './components/Aside/Aside'
import {Content} from './components/Content/Content'

const initialState = {
    aboutMe: {
        name: 'Vladislav Malohvey',
        nameRu: 'Владислав Малохвей',
        profession: 'Frontend Developer',
        description: 'Hi. My name is Vladislav. I am a junior frontend developer. ' +
            'I really like working in this field. I know English at a basic level. I have about six months of production development experience and I want to develop further.' +
            ' Calm and balanced, a great desire to learn new technologies. I will be glad to talk.',
        descriptionRu: 'Хай. Меня зовут Владислав. Я младший фронтенд разработчик. ' +
            'Мне очень нравится работать в этой сфере. Знаю английский язык на базовом уровне.' +
            ' Имею опыт продакшн разработки около полугода и хочу развиваться дальше. Спокойный и уравновешенный, ' +
            'большое желание учиться новым технологиям. Буду рад пообщаться.',
    },
    contacts: {
        mail: 'vladward13@gmail.com',
        location: 'Minsk, Belarus',
        linkedIn: 'LinkedIn account',
        github: 'Github account'
    },
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
    interests: [
        {id: 1, title: 'Web Development', titleRu: 'Веб разработка'},
        {id: 2, title: 'Video Games', titleRu: 'Видео игры'},
        {id: 3, title :'Cars', titleRu: 'Автомобили'},
        {id: 4, title: 'Travel', titleRu: 'Путешествия'},
    ],
    work: [
        {id: 1, title: 'System administrator -  Health care institution “Shchuchin Central District Hospital” (2014 - 2016)', titleRu: 'Системный администратор - Учреждение здравоохранения "Щучинская центральная районная больница (2014 - 2016)"'},
        {id: 2, title: 'Driver - Logistics transport company (2016 - 2021)', titleRu: 'Водитель - Логистическая транспортная компания (2016 - 2021'},
        {id: 3, title: 'Junior React developer (2021 - present)', titleRu: 'Младший React разработчик (2021 - настоящее время'},
    ],
    education: [
        {id: 1, title: 'Information technology software Technological College Educational Institution "The Yanka Kupala State University of Grodno" (2010 - 2014)', titleRu: 'Гродненский Химико-Технологический колледж имени Янки Купалы (2010 - 2014)'},
        {id: 2, title: 'Front-end React developer - It-incubator.by (2021/09 - 2022/02)', titleRu: 'Фронтенд Инкубатор It-incubator.by (2021/09 - 2022/02)'},
    ],
    projects: [
        {id: 1, link: 'https://vladward.github.io/burger-vlad/', title: 'Burger', titleRu: 'Бургер', description: 'Simple and fun website create by HTML, CSS and JS', descriptionRu: 'Простой и веселый сайт о бургерах созданный при помощи HTML, CSS и Javascript', wip: false},
        {id: 2, link: 'https://vladward.github.io/TO_DO/', title: 'Todolist', titleRu: 'Список дел', description: 'Web application with React, TypeScript and Redux', descriptionRu: 'Веб-приложение разработанное с помощью React, Typescript и Redux', wip: true},
        {id: 3, link: 'https://vladward.github.io/currency_exchange/',
            title: 'Currency exchange', titleRu: 'Обмен валюты', description: 'Web application with React, Typescript, Redux, React-redux', descriptionRu: 'Веб-приложение разработанное с помощью React, Typescript, Redux и React-Redux', wip: false},
        {id: 4, link: 'https://vladward.github.io/counter/', title: 'Counter', titleRu: 'Счетчик', description: 'Web application with React, TypeScript and Redux', descriptionRu: 'Веб-приложение разработанное с помощью React, Typescript и Redux', wip: false},
        {id: 5, link: 'https://vladward.github.io/components/', title: 'Storybook components', titleRu: 'Компоненты Storybook', description: 'Simple components for usage create by StoryBook, React, Typescript', descriptionRu: 'Простые компоненты для использования на проектах, созданны при использовании Storybook, React и Typescript', wip: true},
        {id: 6, link: 'https://vladward.github.io/sn-app/', title: 'Social Network', titleRu: 'Социальная сеть', description: 'Create by React, Redux, Typescript', descriptionRu: 'Создана при помощи библиотек React, Redux и Typescript', wip: true},
    ]
}
const ruInitialState = {
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
        location: 'Minsk, Belarus',
        linkedIn: 'LinkedIn account',
        github: 'Github account'
    },
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
    interests: [
        {id: 1, title: 'Веб разработка'},
        {id: 2, title: 'Видео игры'},
        {id: 3, title: 'Автомобили'},
        {id: 4, title: 'Путешествия'},
    ],
    work: [
        {id: 1, title: 'Системный администратор - Учреждение здравоохранения "Щучинская центральная районная больница (2014 - 2016)"'},
        {id: 2, title: 'Водитель - Логистическая транспортная компания (2016 - 2021'},
        {id: 3, title: 'Младший React разработчик (2021 - настоящее время'},
    ],
    education: [
        {id: 1, title: 'Гродненский Химико-Технологический колледж имени Янки Купалы (2010 - 2014)'},
        {id: 2, title: 'Фронтенд Инкубатор It-incubator.by (2021/09 - 2022/02)'},
    ],
    projects: [
        {id: 1, link: 'https://vladward.github.io/burger-vlad/', title: 'Бургер', description: 'Простой и веселый сайт о бургерах созданный при помощи HTML, CSS и Javascript', wip: false},
        {id: 2, link: 'https://vladward.github.io/TO_DO/', title: 'Список дел', description: 'Веб-приложение разработанное с помощью React, Typescript и Redux', wip: true},
        {id: 3, link: 'https://vladward.github.io/currency_exchange/',
            title: 'Обмен валюты', description: 'Веб-приложение разработанное с помощью React, Typescript, Redux и React-Redux', wip: false},
        {id: 4, link: 'https://vladward.github.io/counter/', title: 'Счетчик', description: 'Веб-приложение разработанное с помощью React, Typescript и Redux', wip: false},
        {id: 5, link: 'https://vladward.github.io/components/', title: 'Компоненты Storybook', description: 'Простые компоненты для использования на проектах, созданны при использовании Storybook, React и Typescript', wip: true},
        {id: 6, link: 'https://vladward.github.io/sn-app/', title: 'Социальная сеть', description: 'Создана при помощи библиотек React, Redux и Typescript', wip: true},
    ]
}

export const App = () => {
    const [lang, setlang] = useState(false)
    const [profileData, setProfileData] = useState({...initialState})
    const [profileRuData, setProfileRuData] = useState({...ruInitialState})

    let state = lang ? profileRuData : profileData

    return (
        <div className={s.App}>
            <div className={s.asideContainer}>
                <Aside setLang={setlang} contacts={state.contacts} workWith={state.workingWith} interests={state.interests}/>
            </div>
            <div className={s.contentContainer}>
                <Content aboutMe={state.aboutMe} workExp={state.work} education={state.education} projects={state.projects}/>
            </div>
        </div>
    )
}
