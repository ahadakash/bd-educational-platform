import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name2, name, img, specialist
    } = props.service;

    return (

        <div className="col bg-white">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name2}</h5>

                    <p className="card-text">Specialists At: {specialist.slice(0, 60)}</p>
                    <Link to={`/Doctor/${name2}`}>
                        <button className="btn">{name.toUpperCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;