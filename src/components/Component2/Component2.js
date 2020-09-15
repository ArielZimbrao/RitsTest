import React from 'react';
import './Component2.scss';

export class Component2 extends React.Component {
    render() {
        return (
            <div className="component2-container">
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
                    <div className="component2-box">
                        <div className="component2-img">
                            <div className="component2-fade">
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