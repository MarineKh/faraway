import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {isSidebarMenuOpen, setUsers} from "../../store/slices/globalSlice";
import hamburger from '../../assets/menu-hamburger.svg';
import Sidebar from "../SideBar/Sidebar";
import '../../styles/helpers.scss';
import '../../styles/header.scss';

function Layout({ children }) {
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
        <>
            <header>
                <img alt='Menu Icon' src={hamburger} onClick={handleOpenMenu} />
            </header>

            <div className='flex main'>
                <Sidebar data={usersData}/>
                {children}
            </div>
        </>
    );
}

export default Layout;