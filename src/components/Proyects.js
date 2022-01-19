import React from "react";
import bigImg from "../img/capturaTurnero.jpg";
import bigImg2 from "../img/llamador.jpg"
import "../styles/main/proyects.css";

export default function Proyects() {
	return (
		<div className="general">
			<div className="proyects__section__container">
				<div className="proyects__titulo__container">
					<h2 className="general__titulo">Proyectos</h2>
				</div>
				<div className="proyects__item">
					<div className="proyects__item__bigimg__container">
						<div className="proyects__item__bigimg__filter"></div>
						<img className="proyects__item__bigimg" src={bigImg} alt="turnero" />
					</div>
					<div className="proyects__item__text">
						<h3 className="proyects__item__text_h3">Turnero</h3>
						<div className="proyects__item__text__target">
							<p>Un herramietna para empresas, el turnero permite una adecuada gestión del trafico de clientes.</p>
						</div>
						<div className="proyects__item__text__tegnology">
							<ul className="proyects__item__text__tegnology__ul">
								<li>React</li>
								<li>Node.js</li>
								<li>Express</li>
								<li>Python</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="proyects__item">
					<div className="proyects__item__bigimg__container">
						<div className="proyects__item__bigimg__filter"></div>
						<img className="proyects__item__bigimg" src={bigImg2} alt="llamador" />
					</div>
					<div className="proyects__item__text">
						<h3 className="proyects__item__text_h3">Llamador de Lista</h3>
						<div className="proyects__item__text__target">
							<p>Una combinación de sorfware y hardware para llamar a lista a grupos de forma eficaz, con tarjertas RFID, guardando las listas en base de datos.</p>
						</div>
						<div className="proyects__item__text__tegnology">
							<ul className="proyects__item__text__tegnology__ul">
								<li>React Native</li>
								<li>Node.js</li>
								<li>Express</li>
								<li>SQL</li>
								<li>C++</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
