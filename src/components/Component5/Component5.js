import React from 'react'
import './Component5.scss'
import microImg from '../../asserts/img/micro.png'
import ideiaImg from '../../asserts/img/ideia.png'
import pcImg from '../../asserts/img/pc.png'
import { ButtonSubscribe } from '../common/ButtonSubscribe'

export class Component5 extends React.Component {
    render() {
        return (
            <div className="component5-container">
                <div className="options-container">
                    <div className="options">
                        <div className="micro">
                            <img className="icon" src={microImg} alt=""/>
                            <div className="text">
                                <span>Nullam sit amet pretium justo, quis convallis </span>
                                proin faucibus lectus sed viverra hendrerit.
                            </div>
                        </div>
                        <div className="ideia">
                            <img className="icon" src={ideiaImg} alt=""/>
                            <div className="text">
                                <span>Ut eu dolor vitae elit bibendum fringilla sit amet a elit. Fusce ac cursus nisl </span>
                                mauris id cursus mauris, sollicitudin varius quis convallis metus est.
                            </div>
                        </div>
                        <div className="pc">
                            <img className="icon" src={pcImg} alt=""/>
                            <div className="text">
                                <span>Ut eu dolor: </span>
                                suspendisse feugiat orci sed velit pulvinar pretium.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <div className="description">
                            <div className="text">
                                <span>Suspendisse feugiat orci sed velit pulvinar. </span>
                                Aliquam vitae lorem?
                            </div>
                        </div>
                        <div className="man-writer"></div>
                        <div className="subscribe-button">
                            <ButtonSubscribe></ButtonSubscribe>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}