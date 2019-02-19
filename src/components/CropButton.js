import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function CropButton(props) {
    return (
        <div>
            <Link to={props.route} props={props.country}>
                <button className="cropBtn">{props.crop}</button>
            </Link>
        </div>
    );
}
