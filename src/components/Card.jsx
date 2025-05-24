import { useState } from "react";
import Boton from "./partials/Boton";
import Switcher from "./partials/Switcher";

function Card({ id, logo, name, description }) {
	const [isEnabled, setIsEnabled] = useState(true);

	function handleRemove(id) {
		const cardRemove = document.getElementById(`card-${id}`);
		cardRemove.remove();
	}

	return (
		<div
			id={`card-${id}`}
			data-type="card"
			data-active={isEnabled}
			className="flex flex-col items-center border border-neutro-4 bg-neutro-2 rounded-xl px-4 py-4 gap-10
		font-display dark:bg-neutro-8 dark:border-neutro-7 dark:text-neutro-5">
			<div className="flex items-start gap-3 ">
				<img src={`${logo}`} alt={name} />
				<div>
					<h4 className="text-lg font-siete dark:text-neutro-5">{name}</h4>
					<h5 className="text-sm font-cuatro text-neutro-6 text-principal">{description}</h5>
				</div>
			</div>
			<div className="flex w-full items-center justify-between">
				<Boton texto="Remove" onClick={() => { handleRemove(id) }} />
				<Switcher setIsEnabled={setIsEnabled} isEnabled={isEnabled} cardId={`card-${id}`} cosa="algo" />
			</div>
		</div>
	);
}

export default Card;