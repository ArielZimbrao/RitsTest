import React from 'react';
import './UtEuDolor.scss';
import img from '../../asserts/img/uteudolor.png'

export class UtEuDolor extends React.Component {
    render() {
        return (
            <div className="uteudolor-container">
                <div className="title-container">
                    <div className="title">Ut eu dolor vitae elit bibendum fringilla elit...</div>
                </div>
                <div className="img-container">
                    <img className="img" src={img} alt=""></img>
                </div>
            </div>
        );
    }
}