import React , {useState} from "react";
import "../styles/main/about2.css";


import nodeLogo from "../icon/nodejs.png";
import reactLogo from "../icon/react.png";
import phpLogo from "../icon/php.png";
import sqlLogo from "../icon/sql.png";
import foto from "../img/foto.jpg";

export default function About2() {

	const [onImg , setOnImg] = useState(false)

	return (
		<section className="general">
			<div className="about2__section__container">
				<div className="about2__titulo__container">
					<h2 className="general__titulo">Sobre mi</h2>
				</div>
				<div className="aboutme">
					<div className="aboutme__text">
						<p className="genereal__text__p">
							Hola, mi nombre es Esteban; empecé mi vida como programador en el 2016 con simples códigos para arduino, luego en la universidad mientras estudiaba una carrera que no era completamente para mi, descrubrí que el código en su totalidad era lo que verdaderamente quería estudiar.
						</p>
						<p className="genereal__text__p">Empece buscando mi camino con C++, pasando por python y Java, pero encontré lo que más me apasiona cuando llegué al desarrollo web. Ahora la programación más el estimulo visual era lo que necesitaba para sentime completo</p>
						<div className="skills__container">
							<p className="genereal__text__p">Aquí las habilidades que actualmente me considero con nivel medio/alto y aun sigo en formación:</p>
							<div className="skills">
								<div className="skill">
									<img className="skill__logo" src={nodeLogo} />
									<h3 className="skill__text">Node.js</h3>
								</div>
								<div className="skill">
									<img className="skill__logo" src={reactLogo} />
									<h3 className="skill__text">React</h3>
								</div>
								<div className="skill">
									<img className="skill__logo" src={sqlLogo} />
									<h3 className="skill__text">SQL</h3>
								</div>
								<div className="skill">
									<img className="skill__logo" src={phpLogo} />
									<h3 className="skill__text">PHP</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="aboutme__myimg" onMouseLeave={() => setOnImg(false)} onMouseEnter={() => setOnImg(true)}>
						<div className={!onImg ? "aboutme__myimg__filter" : "aboutme__myimg__filter aboutme__myimg__filter__invisible"}></div>
						<img alt="perfilPhoto" className={!onImg ? "aboutme__myimg__img" : "aboutme__myimg__img aboutme__myimg__img__moved"} src={foto} />
						<div className="aboutme__myimg__shadow"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
