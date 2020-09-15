import React from 'react';
import img from '../../asserts/img/component1-img.jpg'
import { ButtonSubscribe } from '../common/ButtonSubscribe'
import './Component1.scss'

export class Component1 extends React.Component {
    render () {
        return (
            <div className="component1-container">
                <div className="subscribe-container">
                    <div className="text-container">
                        <span className="title">Consectetur adipiscing elit</span>
                        <span className="description">
                            <strong className="sub-title">Quisque tincidunt: </strong>
                            Quisque ultricies, tortor vitae tincidunt molestie, arcu enim imperdiet urna, id aliquet ipsum massa luctus ipsum.
                        </span>
                        <ButtonSubscribe></ButtonSubscribe>
                    </div>
                </div>
                <div className="image-container">
                    <img className="img" src={img} alt=""></img>
                </div>
            </div>
        );
    }
}