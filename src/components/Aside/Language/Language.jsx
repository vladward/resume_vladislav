import React, {useState} from 'react'
import s from './../Aside.module.css'

export const Language = (props) => {
    const [onOff, setOnOff] = useState(false)

    const onFunction = () => {
        setOnOff(!onOff)
        props.setLang(true)
    }

    const offFunction = () => {
        setOnOff(!onOff)
        props.setLang(false)
    }

    const styleRu = {
        width: "30px",
        height: "30px",
        border: "1px solid gray",
        borderRight: "none",
        display: "inline-block",
        backgroundColor: onOff ? "burlywood" : "white",
        cursor: "pointer",
        textAlign: "center",
    }
    const styleEng = {
        width: "30px",
        height: "30px",
        border: "1px solid gray",
        borderLeft: "none",
        display: "inline-block",
        backgroundColor: onOff ? "white" : "burlywood",
        cursor: "pointer",
        textAlign: "center",
    }
    return (
        <div className={s.radioContainer}>
            <div style={styleRu} onClick={onFunction}>Ru</div>
            <div style={styleEng} onClick={offFunction}>Eng</div>
        </div>
    )
}