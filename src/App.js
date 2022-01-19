import "./App.css";
import "./styles/main/general.css";

import "./styles/normalize/normalize.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RigthSide";
import About from "./components/About";
import About2 from "./components/About2";
import Briefcase from "./components/Briefcase";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

import { scroller } from "react-scroll";

function App() {
	const aboutRef = useRef(null);
	const briefcaseRef = useRef(null);
	const proyectsRef = useRef(null);
	const contactsRef = useRef(null);

	const refs = [aboutRef, briefcaseRef, proyectsRef, contactsRef];

	function toRef(ref) {
		scroller.scrollTo(ref.current.attributes.class.value, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
	}

	return (
		<div>
			<Header listRefs={refs} toRef={toRef} />
			<LeftSide />
			<RigthSide />
			<main className="normalize__container">
				<About />
				<div ref={aboutRef} className="11#">
					<About2 />
				</div>
				<div ref={briefcaseRef} className="12#">
					<Briefcase />
				</div>
				<div ref={proyectsRef} className="13#">
					<Proyects />
				</div>
				<div ref={contactsRef} className="14#">
					<Contact />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
