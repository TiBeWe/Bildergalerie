import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="about">
                    <h3>Über mich</h3>
                    <p>
                        Ich bin Timo Weber, und dies ist meine Ferien-Galerie von Spanien.
                        Entdecke die Vielfalt Spaniens durch diese Bilder und Videos.
                    </p>
                </div>

                <div className="navigation">
                    <h3>Nützliche Links</h3>
                    <ul>
                        <li><a href="https://github.com/TiBeWe/Bildergalerie" target="_blank">Github</a></li>
                        <li><a href="https://github.com/TiBeWe/Bildergalerie/blob/main/README.md" target="_blank">README</a></li>
                        <li><a href="https://github.com/users/TiBeWe/projects/1" target="_blank">Scrum Board</a></li>
                        <li><a href="https://github.com/TiBeWe/Bildergalerie/wiki/Reflexion" target="_blank">Reflexion</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h3>Kontakt</h3>
                    <p>
                        E-Mail: <a href="mailto:timo.weber@lernende.bbw.ch">timo.weber@lernende.bbw.ch</a><br/>
                        Social Media:
                        <a href="https://www.instagram.com/timoo.weber/" target="_blank"> Instagram</a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Timo Weber. Alle Rechte vorbehalten.</p>
            </div>
        </footer>

    );
};

export default Footer;
