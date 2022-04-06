import { useState } from "react";
import { Expense } from "../models/Expense";

const expenseObj: Expense = {
	amount: 100,
	category: "",
	createdBy: "",
	createdOn: Date.now(),
	expDate: 0,
};

export function ExpenseForm() {
	console.log("ExpenseForm Rendered");
	const [expense, setExpense] = useState(expenseObj);

	const categories = [
		"Food Expenses",
		"Travel Expenses",
		"EMI",
		"Entertaintment",
		"Productivity",
	];

	let formHeader = "Add Expenses";

	const addExpenseHandler = () => {
		alert(JSON.stringify(expense));
	};
	return (
		<>
			<h3>{formHeader}</h3>
			{
				<div
					style={{ display: "flex", flexDirection: "column", width: "450px" }}
				>
					<input
						type="number"
						placeholder="Enter Amount"
						value={expense.amount}
						onChange={(ev) => {
							setExpense({ ...expense, amount: parseInt(ev.target.value) });
						}}
					/>
					<select
						name="cars"
						id="cars"
						onChange={(ev) => {
							setExpense({ ...expense, category: ev.target.value });
						}}
					>
						<option value="Food Expenses">Food Expenses</option>
						<option value="Travel Expenses">Travel Expenses</option>
						<option value="EMI">EMI's</option>
					</select>
					<input
						type="date"
						value={expense.expDate}
						placeholder="Date of Expense"
						onChange={(ev) => {
							setExpense({ ...expense, expDate: parseInt(ev.target.value) });
						}}
					/>

					<button onClick={addExpenseHandler}>Add Expenses</button>
				</div>
			}
		</>
	);
}
