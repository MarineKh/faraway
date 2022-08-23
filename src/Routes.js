import React from "react"
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content/Content";

import './styles/helpers.scss';
import './styles/header.scss';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Content isHomePage={true}/>} />

            <Route path="/user">
                <Route path=":userId" element={<Content />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
