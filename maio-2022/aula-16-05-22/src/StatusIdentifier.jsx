
import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    transition: 0.2s;
`;

const StatusDead = styled.div`
    filter: grayscale(100%);
`;

const StatusIdentifier = (_image, _status) => {
    const image = _image;

    if (_status === 'Dead') {
        return (
            <StatusDead className="character-image-container dead">
                <StyledImg className="character-image" src={image} alt={_status} />
            </StatusDead>
        );
    } else if (_status === 'Alive') {
        return (
            <div className="character-image-container alive">
                <StyledImg className="character-image" src={image} alt={_status} />
            </div>
        );
    } else {
        return (
            <div className="character-image-container unknown">
                <StyledImg className="character-image" src={image} alt={_status} />
            </div>
        );
    }
}

export default StatusIdentifier;