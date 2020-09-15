import React from 'react'
import { ButtonSubscribe } from '../common/ButtonSubscribe'
import './Component6.scss'
import googleImg from '../../asserts/img/google-icon.png'
import winImg from '../../asserts/img/win-icon.png'
import buildImg from '../../asserts/img/build-icon.png'

export class Component6 extends React.Component {
    render() {
        return (
            <div className="component6-container">
                <div className="image-container">
                    <div className="image">
                        <div className="description">
                            <div className="text">
                                <span>Nullam sit amet pretium justo, quis convallisac. </span>
                                Mauris id cursus est?
                            </div>
                        </div>
                        <div className="girl-heaset"></div>
                        <div className="subscribe-button">
                            <ButtonSubscribe></ButtonSubscribe>
                        </div>
                    </div>
                </div>
                <div className="options-container">
                    <div className="options">
                        <div className="win">
                            <img className="icon" src={winImg} alt=""/>
                            <div className="text">
                                <span>Nunc congue magnas: </span>
                                vel elementum finibufaucibus lectus sed viverra hendrerit.
                            </div>
                        </div>
                        <div className="build">
                            <img className="icon" src={buildImg} alt=""/>
                            <div className="text">
                                <span>Fusce ac cursus nisl nisl </span>
                                mauris id cursus mauris, sollicitudin varius quis convallis metus est.
                            </div>
                        </div>
                        <div className="google">
                            <img className="icon" src={googleImg} alt=""/>
                            <div className="text">
                                <span>Ut eu dolor vitae elits </span>
                                Ut eu dolor vitae elit bibendum fringilla sit amet a elit mauris in sollicitudin eros.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}