import React from "react";
import './footer.css'

const Footer:React.FC=()=>{
    return(
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <h3>EduPlus</h3>
                    <p>Plateforme d'apprentissage en ligne dédiée à l'éducation de qualité pour tous, conformément à l'ODD 4.</p>
                    <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Navigation</h3>
                    <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="cours.html">Cours</a></li>
                    <li><a href="#">Enseignants</a></li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Support</h3>
                    <ul>
                    <li><a href="#">Centre d'aide</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Conditions d'utilisation</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contact</h3>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Rue de l'Éducation, Paris</p>
                    <p><i className="fas fa-phone"></i> +33 1 23 45 67 89</p>
                    <p><i className="fas fa-envelope"></i> contact@eduplus.fr</p>
                </div>
                </div>
                <div className="footer-bottom">
                <p>&copy; 2025 EduPlus - Tous droits réservés. Inspiré par l'Objectif de Développement Durable 4.</p>
            </div>
        </footer>
    );
};

export default Footer;