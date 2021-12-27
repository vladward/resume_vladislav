import s from './App.module.css';
import {Aside} from './components/Aside/Aside'
import {Content} from './components/Content/Content'

export const App = () => {
  return (
    <div className={s.App}>
        <div className={s.asideContainer}>
            <Aside/>
        </div>
        <div className={s.contentContainer}>
            <Content/>
        </div>
    </div>
  )
}
