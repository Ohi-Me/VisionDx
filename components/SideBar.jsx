"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMap,
  faSnowflake,
  faShield,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
	const handleMoveToSection = (index) => {
		fullpage_api.moveTo(index);
		fullpage_api.getActiveSection();
	};

	const containIsActive = (index) => {
		if (fullpage_api.getActiveSection().index === index) {
			return "bg-gray-500";
		}
		return "";
	};
	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="SideBar"
				className="flex flex-col justify-evenly items-center h-full  text-gray-50">
				<li data-menuanchor="Home" className="active">
					<button onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="Navigate">
					<button onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon icon={faMap} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="MediSync">
					<button onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faSnowflake}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="VitalVoyage">
					<button onClick={() => handleMoveToSection(4)}>
						<FontAwesomeIcon
							icon={faShield}
							className="text-xl"
						/>
					</button>
				</li>
                <li data-menuanchor="GetinTouch">
					<button onClick={() => handleMoveToSection(5)}>
						<FontAwesomeIcon
							icon={faMapMarker}
							className="text-xl"
						/>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
