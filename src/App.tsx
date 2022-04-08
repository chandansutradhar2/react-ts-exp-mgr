import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { ExpenseList } from "./ExpenseList/ExpenseList";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { Child1 } from "./PropsDemo/Child1";
import { Child2 } from "./PropsDemo/Child2";
import { StateClassComponent } from "./StateDemo/StateClassCom";
import store from "./store/store";
import { Child3 } from "./PropsDemo/Child3";

function App() {
	const userName = "Chandan";
	const [counter, setCounter] = useState(10);
	console.log(store);

	// setInterval(() => {
	// 	setCounter(counter + 1);
	// }, 2000);

	console.log("App rendered");

	const emailChangeHandler = (email: string) => {
		console.log(email);
	};

	return (
		<div className="App">
			<h3>Typescript Based Expense Manager</h3>
			{/* <ExpenseForm />
			<ExpenseList /> */}
			<Child1
				onEmailChange={emailChangeHandler}
				expense={200}
				userName={"chandan"}
				token={"sometoken"}
			/>
			<Child2 username={"chandan"} />
			{/* <Child3 counter={counter} /> */}
		</div>
	);
}

export default App;
