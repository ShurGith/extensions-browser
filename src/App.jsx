import ButtonGroup from './components/ButtonGroup.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Header from './components/Header.jsx';

function App() {
	return (
		<div className="flex flex-col gap-4 bg-neutro-4 dark:bg-neutro-9
		   lg:max-w-5/6 lg:mx-auto">
			<Header />
			<ButtonGroup />
			<CardsContainer />
		</div>
	)
}

export default App
