import { Switch } from '@headlessui/react'

function Switcher({ setIsEnabled, isEnabled, cardId }) {

	const changCardState = () => {
		const card = document.getElementById(cardId);
		card.dataset.active = !card.dataset.active;
		setIsEnabled(!isEnabled);
	}

	return (

		<Switch
			checked={!isEnabled}
			onChange={changCardState}
			className= "group relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-neutro-1 border-transparenttransition-colors duration-200 ease-in-out focus:ring-2 focus:ring-rojo-7 focus:ring-offset-2 dark:ring-offset-neutro-8 focus:outline-hidden bg-neutro-1 dark:bg-neutro-6 dark:border-neutro-6 data-checked:bg-rojo-7"
		>
			<span
				aria-hidden="true"
				className="pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5"
			/>
		</Switch>
	)
}

export default Switcher