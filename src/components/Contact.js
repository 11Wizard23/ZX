import React from "react";
import "../styles/main/contact.css";
import buttonMail from "../icon/correo.png";

export default function contact() {
	return (
		<div className="contact_area">
			<div className="texto__contact">
				<h2>¿AHORA QUÉ?</h2>
				<h3>Eso lo decides tu, estoy abierto a nuevas oportunidades.</h3>
			</div>
			<div className="SendmeAMail">
				<a href="mailto:1123garciacano@gmail.com">
					<img className="imgMail" src={buttonMail} alt="mailto"/>
				</a>
			</div>
		</div>
	);
}
