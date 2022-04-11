import { useState } from "react";
import { Expense } from "../models/Expense";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { ExpenseList } from "./ExpenseList/ExpenseList";

const expArr: Expense[] = [];
export function ExpensView() {
	const [expenses, setExpenses] = useState(expArr);

	const addExpHandler = (expense: Expense) => {
		let tmp: Expense[] = expenses.slice();
		tmp.push(expense);
		setExpenses(tmp);
	};

	return (
		<div className="container">
			<h2>Expense View</h2>
			<ExpenseForm onExpAdded={addExpHandler} />
			<ExpenseList expenses={expenses} />
		</div>
	);
}
