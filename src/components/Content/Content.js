import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as FaIcons from "react-icons/fa";

import EditModal from "../EditModal/EditModal";
import DeleteModal from "../EditModal/DeleteModal";

import {setSelectedUser} from "../../store/slices/globalSlice";
import '../../styles/content.scss';
import image from '../../assets/home_illustration.jpg';

const Content = ({ data, isHomePage= false}) => {
    const dispatch = useDispatch();

    const isEditModalOpen = useSelector(state => state.global.isEditModalOpen);
    const isDeleteModalOpen = useSelector(state => state.global.isDeleteModalOpen);

    useEffect(()=> {
        dispatch(setSelectedUser(data))
    },[data, dispatch]);


    return (
            isHomePage ? (
                <div className='home-content flex-center flex-column w100'>
                    <img className='home-image' src={image} alt='Home Illustration' />
                    <p className='home-description'>Choose a user to see the info.</p>
                </div>
            ) : (
                <>

                    <div className='user-info-box flex-center'>
                        <div className='user-info flex-center'>
                            <FaIcons.FaUser className='name'/>
                            <div className='user-details'>
                                <span className='info-label'>Name</span>
                                <span>{data.name}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaPhone className='phone'/>
                            <div className='user-details'>
                                <span className='info-label'>Phone</span>
                                <span>{data.phone}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaMailBulk className='email'/>
                            <div className='user-details'>
                                <span className='info-label'>Email</span>
                                <span>{data.email}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaTransgender className='gender'/>
                            <div className='user-details'>
                                <span className='info-label'>Gender</span>
                                <span>{data.gender}</span>
                            </div>
                        </div>
                    </div>

                    {isEditModalOpen && <EditModal />}
                    {isDeleteModalOpen && <DeleteModal />}
                </>
            )
    );
};

export default Content;
