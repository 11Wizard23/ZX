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
					<a href="https://www.instagram.com/invites/contact/?i=7djoudiwbfg5&utm_content=1xcc3ex" target="_blank" rel="noreferrer">
						<img className="leftSideBar__list__link__icon" src={instagram} />
					</a>
				</li>
				<li className="leftSideBar__list__link">
					<a href="https://www.facebook.com/profile.php?id=100077141325957" target="_blank" rel="noreferrer">
						<img className="leftSideBar__list__link__icon" src={facebook} />
					</a>
				</li>
				<li className="leftSideBar__list__link">
					<a href="https://wa.me/573226881175" target="_blank" rel="noreferrer">
						<img className="leftSideBar__list__link__icon" src={whatsapp} />
					</a>
				</li>
			</ul>
		</div>
	);
}
