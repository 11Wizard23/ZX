import React from "react";
import gphLogo from "../img/gph_logo.png";
import LaserLogo from "../img/LaserLogo.png";
import "../styles/main/briefcase.css";

export default function Briefcase() {
	return (
		<section className="general">
			<div className="briefcase__section__container">
				<div className="briefcase__titulo__container">
					<h2 className="general__titulo">Portafolio</h2>
				</div>
				<div className="briefcase__text">
					<p className="genereal__text__p">Actualmente mis trabajos a nivel profesional son pocos, 
					sin embargo, de calidad.</p>
					<p className="genereal__text__p">Si te gusta lo que ves, estoy abierto a nuevas oportunidades, 
					juntos haremos que este portafolio sea más grande</p>
				</div>
				<div className="briefcase__list__container">
					<div className="briefcase__list__item">
						<a href="https://gestionenph.com" target="_blank" rel="noreferrer">
							<img className="briefcase__list__item__logo" src={gphLogo} alt="GestionEnPh" />
						</a>
						<div className="briefcase__list__item__text">
							<a href="https://gestionenph.com" target="_blank" rel="noreferrer">
								<h3 className="briefcase__list__item__text__h3">gestionenph.com</h3>
							</a>
							<div className="briefcase__list__item__flexedText">
								<div className="briefcase__list__item__flexedText__container">
									<p className="briefcase__list__item__text__p">Tecnologías utilizadas:</p>
									<ul className="briefcase__list__item__text__ul">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>PHP</li>
										<li>SQL</li>
									</ul>
								</div>
								<div className="briefcase__list__item__flexedText__container">
									<p className="briefcase__list__item__text__p">Servicios solicitados:</p>
									<ul className="briefcase__list__item__text__ul">
										<li>Sistema de Login con JWT</li>
										<li>Administrador de contenido</li>
										<li>Administrador de usuarios</li>
										<li>Posicionamiento web por las frases clave "Gestion en ph" y "Administracion Provisional"</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="briefcase__list__item">
					<a href="https://gestionenph.com" target="_blank" rel="noreferrer">
						<img className="briefcase__list__item__logo" src={LaserLogo} alt="LaserYBurbujas" />
						</a>
						<div className="briefcase__list__item__text">
						<a href="https://gestionenph.com" target="_blank" rel="noreferrer">
							
							<h3 className="briefcase__list__item__text__h3">laseryburbujas.com</h3>
							</a>
							<div className="briefcase__list__item__flexedText">
								<div className="briefcase__list__item__flexedText__container">
									<p className="briefcase__list__item__text__p">Tecnologías utilizadas:</p>
									<ul className="briefcase__list__item__text__ul">
										<li>React</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>CSS</li>
										<li>SQL</li>
									</ul>
								</div>
								<div className="briefcase__list__item__flexedText__container">
									<p className="briefcase__list__item__text__p">Servicios solicitados:</p>
									<ul className="briefcase__list__item__text__ul">
										<li>E-comerse</li>
										<li>Sistema de Login con JWT</li>
										<li>Administrador de contenido</li>
										<li>Administrador de usuarios</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
