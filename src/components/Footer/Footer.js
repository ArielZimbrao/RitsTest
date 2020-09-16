import React from 'react'
import './Footer.scss'

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="info-container">
                    <div className="redes">
                        <div className="logo"></div>
                        <div className="redes-sociais-logo"></div>
                    </div>
                    <div className="copyright-info">
                        <div className="copyright">Copyright © 2020 - Rits Tecnologia. Todos os direitos reservados. Política de Privacidade</div>
                        <div className="company">Rits</div>
                    </div>
                </div>
            </div>
        );
    }
}