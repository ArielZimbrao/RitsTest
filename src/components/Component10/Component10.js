import React from 'react'
import './Component10.scss'

export class Component10 extends React.Component {
    render() {
        return (
            <div className="component10-container">
                <div className="contact-container">
                    <div className="contact-type email">
                        <div className="info-container">
                            <div className="image-email"></div>
                            <div className="text">Alguma dúvida?</div>
                        </div>
                    </div>
                    <div className="contact-type phone">
                        <div className="info-container">
                            <div className="image-phone"></div>
                            <div className="text">Ligamos pra você</div>
                        </div>
                    </div>
                    <div className="contact-type whats">
                        <div className="info-container">
                            <div className="image-whats"></div>
                            <div className="text">Fale pelo WhatsApp</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}