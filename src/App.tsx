import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { ExpenseList } from "./ExpenseList/ExpenseList";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";

function App() {
	console.log("App rendered");
	return (
		<div className="App">
			<h3>Typescript Based Expense Manager</h3>
			<ExpenseForm />
			<ExpenseList />
			<ExpenseItem />
		</div>
	);
}

export default App;
