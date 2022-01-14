import logo from "./logo.svg";
import "./App.css";
import "./styles/normalize/normalize.css"
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RigthSide"
import About from "./components/About";
import About2 from "./components/About2";

function App() {
	return (
		<>
			<Header />
      <LeftSide />
			<RigthSide />
			<main className="normalize__container">
				<About />
				<About2 />
			</main>

		</>
	);
}

export default App;
