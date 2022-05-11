
import React from "react";

import './StatusIdentifier.css'

const StatusIdentifier = (_image, _status) => {
    const image = _image;

    if (_status === 'Dead') {
        return (
            <div className="character-image-container dead">
                <img className="character-image" src={image} alt={_status} />
            </div>
        );
    } else if (_status === 'Alive') {
        return (
            <div className="character-image-container alive">
                <img className="character-image" src={image} alt={_status} />
            </div>
        );
    } else {
        return (
            <div className="character-image-container unknown">
                <img className="character-image" src={image} alt={_status} />
            </div>
        );
    }
}

export default StatusIdentifier;