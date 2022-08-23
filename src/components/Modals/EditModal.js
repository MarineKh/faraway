import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as FaIcons from "react-icons/fa";

import {isEditModalOpen, setUsers} from "../../store/slices/globalSlice";
import '../../styles/editmodal.scss';

const EditModal = ({ selectedUser }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.global.usersData);
    const [error, setError] = useState(null);

    const [currentUser, setCurrentUser] = useState({
        id: selectedUser.id,
        name: selectedUser.name,
        address: selectedUser.address,
        email: selectedUser.email,
        phone: selectedUser.phone,
        gender: selectedUser.gender,
        path: selectedUser.path
    });

    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    const handleInputChange = event => {
        setCurrentUser({...currentUser, [event.target.name]: event.target.value})
    };

    const handleSaveChanges = ()=> {
        const updatedData = usersData.map((user)=> user.id === currentUser.id ?  currentUser : user)

        if (!isValidEmail(currentUser.email)) {
            setError('Email is invalid');
        } else {
            dispatch(setUsers(updatedData))
            dispatch(isEditModalOpen(false))
            setError(null);
        }
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-close'>
                    <FaIcons.FaWindowClose onClick={ ()=> dispatch(isEditModalOpen(false)) }/>
                </div>

                <div className='modal-body'>
                    <form>
                        <label htmlFor='name' className='flex flex-column'>
                            Name
                            <input type='text' id='name' name='name' value={currentUser.name} onChange={handleInputChange} />
                        </label>

                        <label htmlFor='phone' className='flex flex-column'>
                            Phone
                            <input type='text' id='phone' name='phone' value={currentUser.phone} onChange={handleInputChange} />
                        </label>

                        <label htmlFor='email' className='flex flex-column'>
                            Email
                            <input type='text' id='email' name='email' value={currentUser.email} onChange={handleInputChange}/>
                        </label>

                       <div className='radio-buttons flex'>
                           <div className='flex'>
                               <input type="radio" value='male' id='male' onChange={handleInputChange} name="gender" defaultChecked={currentUser.gender === "male"} />
                               <label htmlFor="male">Male</label>
                           </div>

                           <div className='flex'>
                               <input type="radio" value='female' id='female' onChange={handleInputChange} name="gender" defaultChecked={currentUser.gender === "female"} />
                               <label htmlFor="female">Female</label>
                           </div>
                       </div>
                    </form>
                </div>

                {error && (
                    <div className='error-handling'>
                        <h5>{error}</h5>
                    </div>
                )}

                <div className='modal-footer'>
                    <button type='submit' onClick={handleSaveChanges}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
