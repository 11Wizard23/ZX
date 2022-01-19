import React from "react";
import "../styles/main/about.css";

export default function About() {
	return (
		<section className="about general">
			<div className="about__section__container">
				<div className="about__div">
					<h1 className="about__div__h1">Hola, me presento</h1>
				</div>
				<div className="about__div">
					<h2 className="about__div__h2">Esteban García Cano.</h2>
				</div>
				<div className="about__div">
					<h3 className="about__div__h3">Creando un futuro más inteligente.</h3>
				</div>
				<div className="about__div">
					<p className="about__div__p">Estudiante de ingeniería en sistemas, actualmente enfocado en el desarrolo web Full Stack. Cada día en busca de nuevos conocimientos y las aplicaciones a éste. Si algo es importante además de tener el conocimiento, es usarlo.</p>
				</div>
			</div>
		</section>
	);
}
