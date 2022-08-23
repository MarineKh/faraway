import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {isSidebarMenuOpen, setUsers} from "./store/slices/globalSlice";
import Layout from "./components/Layout/Layout";
import Sidebar from "./components/SideBar/Sidebar";
import AppRoutes from "./Routes";

import hamburger from './assets/menu-hamburger.svg'
import './styles/helpers.scss';
import './styles/header.scss';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.global.usersData);

    useEffect(()=> {
        dispatch(setUsers(usersData));
    },[dispatch, usersData])

    const handleOpenMenu = ()=> {
        setSidebarOpen(!sidebarOpen);
        dispatch(isSidebarMenuOpen(!sidebarOpen))
    }

    return (
        <Layout>
            <header>
                <img alt='Menu Icon' src={hamburger} onClick={handleOpenMenu} />
            </header>

            <div className='flex main'>
                <Sidebar data={usersData}/>
                <AppRoutes />
            </div>
        </Layout>
    );
}

export default App;
