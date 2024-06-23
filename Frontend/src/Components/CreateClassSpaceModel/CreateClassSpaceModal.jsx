import React, { useState, useRef } from 'react';
import './CreateClassSpaceModal.css';
import { useSelector, useDispatch } from 'react-redux';
import { createClassSpace } from '../../Actions/CreateClassSpaceAction';

const CreateClassSpaceModal = ({ onClose }) => {
    const loading = useSelector((state) => state.classSpaceReducer.uploading);
     const user  = useSelector((state) => state.authReducer.authData);
    const [image, setImage] = useState(null);
    const initialState = {
        classSpaceName: "",
        classSpaceDiscription: "",
        userId: user.userId,

    }
   
    
    const dispatch = useDispatch();
    const [data, setData] = useState(initialState);
    const reset = () => {
        
        setData(initialState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        try {
            dispatch(createClassSpace(data));
            reset();
        } catch (error) {
            console.error("Error creating class space:", error);
        }
        onClose(); // Close modal after submission
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <h4>Create class space</h4>
                    <div className="form-group">
                        <label htmlFor="upload-image">Upload cover image (Optional)</label>
                        <input
                            type="file"
                            id="upload-image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={data.classSpaceName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className='description-textarea'
                            value={data.classSpaceDiscription}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="class-space-submit-button Button"
                        disabled={loading}
                    >{loading ? "loading" : "Create Class Space"}</button>
                </form>
            </div>
        </div>
    );
};

export default CreateClassSpaceModal;
