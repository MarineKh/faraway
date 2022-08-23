import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

import { isEditModalOpen, isDeleteModalOpen, isSidebarMenuOpen } from "../../store/slices/globalSlice";
import '../../styles/sidebar.scss';

const Sidebar = ({data}) => {
    const dispatch = useDispatch();
    const handleSidebarMenuOpen = useSelector(state => state.global.isSidebarMenuOpen);

    return (
        <div className={`${handleSidebarMenuOpen ? 'menu-open' : ''} sidebar`}>
            <div className='sidebar-close' onClick={()=> dispatch(isSidebarMenuOpen(false))}><FaIcons.FaWindowClose/></div>

            <div className='flex flex-column'>
                {
                    data.map(user => {
                        return (
                            <NavLink key={user.id} to={`user/${user.id}`}>
                                <div className='flex space-between'>
                                    {user.name}
                                    <div className='change-buttons'>
                                        <button className='edit-button' onClick={()=> dispatch(isEditModalOpen(true))}>Edit</button>
                                        <button className='delete-button' onClick={()=> dispatch(isDeleteModalOpen(true))}>Delete</button>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default React.memo(Sidebar);
