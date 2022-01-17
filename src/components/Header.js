import logo from "../icon/logoReact.png";
import navincon from "../icon/nav.png";
import "../styles/header/header.css";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
	const [veoLinks, setVeoLinks] = useState(false);
	const [ocultar, setOcultar] = useState(false);
	const [y, setY] = useState(window.scrollY);

	function makethemapear() {
		setVeoLinks(!veoLinks);
	}

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setOcultar(false);
			} else if (y < window.scrollY) {
				setOcultar(true);
				setVeoLinks(false)
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<div>
			<header className={!ocultar ? "header" : "header oculto"}>
				<nav className="header__nav">
					<div className="header__nav__logo_container">
						<img alt="EG-Code-Logo" className="header__nav__logo" src={logo} />
					</div>
					<div className={veoLinks ? "header__nav__links header__nav__links__makethemapear" : "header__nav__links"}>
						<ul className="header__nav__list">
							<li className="header__nav__links__link">Sobre Mi</li>
							<li className="header__nav__links__link">Portafolio</li>
							<li className="header__nav__links__link">Proyectos</li>
							<li className="header__nav__links__link">Contacto</li>
						</ul>
						<button className="header__nav__links__cv">CV</button>
					</div>
					<div onClick={makethemapear} className="header__nav__movileicon">
						<img src={navincon} />
					</div>
				</nav>
			</header>
		</div>
	);
}
