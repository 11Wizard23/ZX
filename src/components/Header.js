import logo from "../icon/logoReact.png";
import navincon from "../icon/nav.png";
import exiticon from "../icon/x.png"
import "../styles/header/header.css";
import { useState, useEffect, useCallback , useRef} from "react";


export default function Header(props) {
	
	const [veoLinks, setVeoLinks] = useState(false);
	const [ocultar, setOcultar] = useState(false);
	const [y, setY] = useState(window.scrollY);
	const wrapperRef = useRef(null);

	function makethemapear() {
		setVeoLinks(true);
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

	function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if ((ref.current && !ref.current.contains(event.target)) && veoLinks) {
								setVeoLinks(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref , veoLinks]);
}

useOutsideAlerter(wrapperRef)

	return (
		<div>
			<header className={!ocultar ? "header" : "header oculto"}>
				<nav className="header__nav">
					<div className="header__nav__logo_container">
						<img alt="EG-Code-Logo" className="header__nav__logo" src={logo} />
					</div>
					<div ref={wrapperRef}  className={veoLinks ? "header__nav__links header__nav__links__makethemapear" : "header__nav__links"}>
						<ul className="header__nav__list">
							<li onClick={() => props.toRef(props.listRefs[0])} className="header__nav__links__link">Sobre Mi</li>
							<li onClick={() => props.toRef(props.listRefs[1])} className="header__nav__links__link">Portafolio</li>
							<li onClick={() => props.toRef(props.listRefs[2])} className="header__nav__links__link">Proyectos</li>
							<li onClick={() => props.toRef(props.listRefs[3])} className="header__nav__links__link">Contacto</li>
						</ul>
						<button className="header__nav__links__cv">CV</button>
					</div>
					<div onClick={makethemapear} className={ !veoLinks ? "header__nav__movileicon" : "header__nav__movileicon __hidden"}>
						<img src={navincon} alt="iconNav"/>
					</div>
					<div className={veoLinks ? "header__nav__movileicon" : "header__nav__movileicon __hidden"}>
						<img src={exiticon} alt="iconNav"/>
					</div>
				</nav>
			</header>
		</div>
	);
}
