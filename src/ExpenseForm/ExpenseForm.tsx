import { useState } from "react";
import { Expense } from "../models/Expense";

const expenseObj: Expense = {
	amount: 0,
	category: "",
	createdBy: "",
	createdOn: Date.now(),
	expDate: 0,
};

export function ExpenseForm() {
	console.log("ExpenseForm Rendered");
	const [amount, setAmount] = useState(500);
	const [expDate, setExpDate] = useState(Date.now());
	const categories = [
		"Food Expenses",
		"Travel Expenses",
		"EMI",
		"Entertaintment",
		"Productivity",
	];

	let formHeader = "Add Expenses";

	const addExpenseHandler = () => {};
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
						onChange={(ev) => setAmount(parseInt(ev.target.value))}
						value={amount}
					/>
					<select name="cars" id="cars">
						<option value="Food Expenses">Food Expenses</option>
						<option value="Travel Expenses">Travel Expenses</option>
						<option value="EMI">EMI's</option>
					</select>
					<input
						type="date"
						value={expDate}
						onChange={(ev) => setExpDate(parseInt(ev.target.value))}
						placeholder="Date of Expense"
					/>

					<button onClick={addExpenseHandler}>Add Expenses</button>
				</div>
			}
		</>
	);
}
