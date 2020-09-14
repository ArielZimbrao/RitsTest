import React from 'react';
import { ButtonSubscribe } from '../common/ButtonSubscribe'
import img from '../../asserts/img/skype.jpg'
import './Suspendisse.scss';

export class Suspendisse extends React.Component {
    render() {
        return (
            <div className="suspendisse-container">
                <div className="subscribe-container">
                    <div className="info">
                        <img className="img" src={img} alt=""/>
                        <span className="text">
                            <span className="white">Suspendisse feugiat orci sed velit pulvinar.</span>
                            Aliquam vitae lorem?
                        </span>
                        <ButtonSubscribe></ButtonSubscribe>
                    </div>
                </div>
                <div className="access-container"></div>
            </div>
        )
    }
}