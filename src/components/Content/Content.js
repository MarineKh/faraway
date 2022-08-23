import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";

import image from '../../assets/home_illustration.jpg';
import '../../styles/content.scss';

const Content = ({isHomePage= false}) => {
    const { userId } = useParams();

    const usersData = useSelector(state => state.global.usersData);
    const isEditModalOpen = useSelector(state => state.global.isEditModalOpen);
    const isDeleteModalOpen = useSelector(state => state.global.isDeleteModalOpen);

    const selectedUser = usersData.filter(user => user.id === +userId)[0];

    return (
            isHomePage ? (
                <div className='home-content flex-center flex-column w100'>
                    <img className='home-image' src={image} alt='Home Illustration' />
                    <p className='home-description'>Select a user to see the info.</p>
                </div>
            ) : (
                <>
                    <div className='user-info-box flex-center'>
                        <div className='user-info flex-center'>
                            <FaIcons.FaUser className='name'/>
                            <div className='user-details'>
                                <span className='info-label'>Name</span>
                                <span>{selectedUser.name}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaPhone className='phone'/>
                            <div className='user-details'>
                                <span className='info-label'>Phone</span>
                                <span>{selectedUser.phone}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaMailBulk className='email'/>
                            <div className='user-details'>
                                <span className='info-label'>Email</span>
                                <span>{selectedUser.email}</span>
                            </div>
                        </div>

                        <div className='user-info flex-center'>
                            <FaIcons.FaTransgender className='gender'/>
                            <div className='user-details'>
                                <span className='info-label'>Gender</span>
                                <span>{selectedUser.gender}</span>
                            </div>
                        </div>
                    </div>

                    {isEditModalOpen && <EditModal selectedUser={selectedUser} />}
                    {isDeleteModalOpen && <DeleteModal selectedUser={selectedUser} />}
                </>
            )
    );
};

export default Content;
