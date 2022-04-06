import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { ExpenseList } from "./ExpenseList/ExpenseList";

function App() {
	return (
		<div className="App">
			<h3>Typescript Based Expense Manager</h3>
			<ExpenseForm />
			<ExpenseList />
		</div>
	);
}

export default App;
