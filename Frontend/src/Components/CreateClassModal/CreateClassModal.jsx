import React, { useState } from 'react';
import './CreateClassModal.css';
import { useSelector, useDispatch } from 'react-redux';
import { createClass } from '../../Actions/CreateClassAction';

const CreateClassModal = ({ onClose }) => {
    // const loading = useSelector((state) => state.classReducer.uploading);
    const loading = false;
    const user = useSelector((state) => state.authReducer.authData);

    const initialState = {
        name: "",
        description: "",
        category: "",
        instructorName: "",
        occupation: "",
        medium: "",
        monthlyFee: "",
        syllabusTitle: "",
        syllabusDescription: "",
        commenceDate: "",
        commenceTime: "",
        repeatDay: "",
        startTime: "",
        endTime: "",
        userId: user.userId,
        schedules: [],
        syllabusItems: []
    };

    const [data, setData] = useState(initialState);
    const [step, setStep] = useState(1);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const reset = () => {
        setData(initialState);
        setImage(null);
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleAddNextSchedule = () => {
        const newSchedule = {
            repeatDay: data.repeatDay,
            startTime: data.startTime,
            endTime: data.endTime
        };
        setData({
            ...data,
            schedules: [...data.schedules, newSchedule],
            repeatDay: "",
            startTime: "",
            endTime: ""
        });
    };

    const handleAddMoreSyllabus = () => {
        const newSyllabusItem = {
            title: data.syllabusTitle,
            description: data.syllabusDescription
        };
        setData({
            ...data,
            syllabusItems: [...data.syllabusItems, newSyllabusItem],
            syllabusTitle: "",
            syllabusDescription: ""
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
        } else if (step === 3) {
            setStep(4);
        } else {
            const newClass = {
                ...data,
                image: image,
            };
            try {
                dispatch(createClass(newClass));
                reset();
            } catch (error) {
                console.error("Error creating class:", error);
            }
            onClose();
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <span className='create-class'>Create class</span>
                <h4 className='heading'>
                    {step === 1 ? "Add Class Details" :
                        step === 2 ? "Add Instructor Details" :
                            step === 3 ? "Add Syllabus" :
                                "Add Schedule"}
                </h4>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="upload-image">Upload cover image (Optional)</label>
                                <input
                                    type="file"
                                    id="upload-image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Class Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={data.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="text-area"
                                    name="description"
                                    value={data.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="next-but">
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="instructorName">Instructor Name</label>
                                <input
                                    type="text"
                                    name="instructorName"
                                    value={data.instructorName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="occupation">Occupation</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    value={data.occupation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medium">Medium</label>
                                <input
                                    type="text"
                                    name="medium"
                                    value={data.medium}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="monthlyFee">Monthly Fee</label>
                                <input
                                    type="text"
                                    name="monthlyFee"
                                    value={data.monthlyFee}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            {data.syllabusItems.map((item, index) => (
                                <div key={index} className="syllabus-item">
                                    <span>{item.title}</span>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                            <div className="form-group">
                                <label htmlFor="syllabusTitle">Title</label>
                                <input
                                    type="text"
                                    name="syllabusTitle"
                                    value={data.syllabusTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="syllabusDescription">Description</label>
                                <textarea
                                    className="text-area"
                                    name="syllabusDescription"
                                    value={data.syllabusDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="addmore-button"
                                onClick={handleAddMoreSyllabus}
                            >
                                + Add More
                            </button>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="commenceDate">Commence on</label>
                                <div className="schedule-group">
                                    <input
                                        type="date"
                                        name="commenceDate"
                                        value={data.commenceDate}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="time"
                                        name="commenceTime"
                                        value={data.commenceTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="repeatDay">Class Timetable</label>
                                {data.schedules.map((schedule, index) => (
                                    <div key={index} className="schedule-item">
                                        <span>Every {schedule.repeatDay}</span>
                                        <span>From {schedule.startTime}</span>
                                        <span>To {schedule.endTime}</span>
                                    </div>
                                ))}
                                <div className="schedule-group">
                                    <select
                                        name="repeatDay"
                                        value={data.repeatDay}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Repeat</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                    </select>
                                    <input
                                        type="time"
                                        name="startTime"
                                        value={data.startTime}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="time"
                                        name="endTime"
                                        value={data.endTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="addmore-button"
                                onClick={handleAddNextSchedule}
                            >
                                + Add Next
                            </button>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="finish-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Finish & Publish"}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateClassModal;
