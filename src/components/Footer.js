import React from "react";
import "../styles/footer/footer.css";
import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import whatsapp from "../icon/whatsapp2.png";

export default function Footer() {
	return (
		<>
			<div className="prefooterRedes">
				<ul className="prefooterRedes__ul">
					<li >
						<a href="https://www.instagram.com/invites/contact/?i=7djoudiwbfg5&utm_content=1xcc3ex" target="_blank" rel="noreferrer">
							<img  src={instagram} />
						</a>
					</li>
					<li >
						<a href="https://www.facebook.com/profile.php?id=100077141325957" target="_blank" rel="noreferrer">
							<img  src={facebook} />
						</a>
					</li>
					<li >
						<a href="https://wa.me/573226881175" target="_blank" rel="noreferrer">
							<img  src={whatsapp} />
						</a>
					</li>
				</ul>
			</div>
			<div className="footer">
				<h4>Designed & Built by Esteban García Cano</h4>
			</div>
		</>
	);
}
