import React from "react";
import "../styles/sides/leftSide.css";
import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import whatsapp from "../icon/whatsapp2.png";

export default function LeftSide() {
	return (
		<div className="leftSideBar">
			<ul className="leftSideBar__list">
				<li className="leftSideBar__list__link">
					<img className="leftSideBar__list__link__icon" src={instagram} />
				</li>
				<li className="leftSideBar__list__link">
					<img className="leftSideBar__list__link__icon" src={facebook} />
				</li>
				<li className="leftSideBar__list__link">
					<img className="leftSideBar__list__link__icon" src={whatsapp} />
				</li>
			</ul>
		</div>
	);
}
