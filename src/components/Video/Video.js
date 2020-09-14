import React from 'react';
import './Video.scss';

export class Video extends React.Component {
    render() {
        return (
            <div className="video-container">
                <div className="container">
                    <div className="description-box">
                        <div className="description-container">
                            <span className="title">Proin eu massa odio?</span>
                            <span className="description">
                                <strong className="sub-title">Maecenas faucibus elementum ipsum nec rhoncus. Integer a tortor vitae felis lobortis rutrum. </strong>
                                Donec convallis turpis et tincidunt pretium. Integer placerat luctus euismod. Nunc congue magna vel elementum
                            </span>
                        </div>
                    </div>
                    <div className="video-box">
                        <div className="video-img">
                            <div className="video-fade">
                                <div className="button-play">
                                    <i class="fas fa-play triangulo"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}