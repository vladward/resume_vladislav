import React from 'react'
import {Route} from "react-router-dom"
import { Routes } from 'react-router-dom'
import {PrintVersion} from './../PrintVersion/PrintVersion'

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path={'/print'} element={<PrintVersion/>}/>
        </Routes>

    )
}