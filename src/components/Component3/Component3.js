import React from 'react';
import './Component3.scss';
import img from '../../asserts/img/component3.png'

export class Component3 extends React.Component {
    render() {
        return (
            <div className="component3-container">
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