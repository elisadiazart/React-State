import { useState } from "react";

const App = () => {
	const [name, setName] = useState('Dani')

	return (
		<>
		<h1>{name}</h1>
		<button onClick={()=>handleClick('Karim', setName)}>Click me</button>
		</>
	)
};

const handleClick = (newName, setName) => {
	setName(newName)
}

export default App;
