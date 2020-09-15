import React from 'react';
import { ButtonSubscribe } from '../common/ButtonSubscribe'
import img from '../../asserts/img/skype.jpg'
import phone from  '../../asserts/img/phone.png'
import speaker from '../../asserts/img/speaker.png'
import classImg from '../../asserts/img/class.png'
import './Component4.scss';

export class Component4 extends React.Component {
    render() {
        return (
            <div className="component4-container">
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
                <div className="access-container">
                    <div className="phone">
                        <img className="icon-access" src={phone} alt="phone icon"></img>
                        <div className="text-access">
                            <span>Maecenas faucibus elementum ipsum nec rhoncus, </span>
                            Nullam sit amet pretium justo, metus.
                        </div>
                    </div>
                    <div className="speaker">
                        <img className="icon-access" src={speaker} alt="phone icon"></img>
                        <div className="text-access">
                            <span>Nunc congue </span>
                            magna vel elementum
                        </div>
                    </div>
                    <div className="class">
                        <img className="icon-access" src={classImg} alt="phone icon"></img>
                        <div className="text-access">
                            <span>Donec convallis </span>
                            turpis et tincidunt pretium.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}