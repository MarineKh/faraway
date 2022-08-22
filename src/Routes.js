import React from "react"
import { useSelector} from "react-redux";
import { Routes, Route } from "react-router-dom";

import Content from "./components/Content/Content";

import './styles/helpers.scss';
import './styles/header.scss';

function AppRoutes() {
    const usersData = useSelector(state => state.global.usersData);

    return (
        <Routes>
            <Route path='/' element={<Content isHomePage={true}/>} />
            {
                usersData.map(data => {
                    return (
                        <Route path={data.path} key={data.id} element={<Content data={data} />} />
                    )
                })
            }
        </Routes>
    );
}

export default AppRoutes;
