import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {isDeleteModalOpen, setUsers} from "../../store/slices/globalSlice";
import '../../styles/editmodal.scss';

const DeleteModal = ({ selectedUser }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const usersData = useSelector(state => state.global.usersData);

    const handleSaveData = ()=> {
        const updatedData = usersData.filter(user => user.id !== selectedUser.id);

        dispatch(setUsers(updatedData))
        dispatch(isDeleteModalOpen(false));
        navigate('/');
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-body'>
                    <p className='delete-message'>Are you sure you want to delete this user?</p>
                </div>

                <div className='modal-footer flex'>
                    <button type='submit' onClick={handleSaveData}>Yes</button>
                    <button className='cancel' onClick={()=> dispatch(isDeleteModalOpen(false))}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
