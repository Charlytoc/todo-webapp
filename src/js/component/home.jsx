import React, {useState} from "react";
import InputTodo from "./inputTodo.jsx";
import ListOFTodos from "./listOfTodos.jsx";

//create your first component
const Home = () => {

	const [todos, setTodos] = useState([])

	const submitTodo = () => {
		console.log()
	}


	const agregarTodo = () => {
		
	}

	return (
		<>
		<InputTodo funcionTocar={submitTodo} agregarTodo={agregarTodo}/>
		<ListOFTodos todoItem="asdas" />
		</>
	);
};

export default Home;
