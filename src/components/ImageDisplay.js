import React, { useContext, useState } from 'react';
import { FcEditImage } from "react-icons/fc";
import GlobalContextData from './GlobalContextData';
import '../UserProfile.css';


const ImageDisplay = () => {
    const { selectedFile, setSelectedFile } = useContext(GlobalContextData);;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="user-profile">
                {selectedFile && (
                    <img src={selectedFile} alt="תמונת פרופיל" className="profile-picture" />
                )}
                <div className='profile-picture-input'>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="profile-picture-input"
                    />
                    <FcEditImage />
                </div>
            </div>
        </div>
    );
};

export default ImageDisplay;
