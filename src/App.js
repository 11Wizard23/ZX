import logo from "./logo.svg";
import "./App.css";
import "./styles/main/general.css"

import "./styles/normalize/normalize.css"
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RigthSide"
import About from "./components/About";
import About2 from "./components/About2";
import Briefcase from "./components/Briefcase";
import { useEffect } from "react";

import Scroll from "react-scroll"

function App() {
		return (
		<div>
			<Header />
      <LeftSide />
			<RigthSide />
			<main className="normalize__container" >
				<About />
				<About2 />
				<Briefcase />
			</main>

		</div>
	);
}

export default App;
