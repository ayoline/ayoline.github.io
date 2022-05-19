import React from "react";
import { useNavigate } from "react-router-dom";

import "./Modal.css"

const Modal = ({ closeModal, charData }) => {
    const navigate = useNavigate();

    const openCardPage = (character) => {
        navigate('/cardpage', { state: character })
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Are you sure Want to continue?</h1>
                </div>
                <div className="body">
                    <p>
                        The next page is awesome! You should move forward, you will enjoy it.
                    </p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={() => openCardPage(charData)}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;