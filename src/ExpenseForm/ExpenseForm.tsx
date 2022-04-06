import { Expense } from "../models/Expense";

export function ExpenseForm() {
	const addExpenseHandler = () => {
		let expense: Expense = {
			amount: 300,
			category: "EMIS",
			createdBy: "chandan",
			createdOn: Date.now(),
			expDate: 1649245422315,
		};

		console.log(expense);
	};

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column", width: "450px" }}>
				<input type="text" placeholder="Enter Amount" />
				<input type="text" placeholder="Date of Expense" />
				<input type="text" placeholder="Category" />
				<button onClick={addExpenseHandler}>Add Expenses</button>
			</div>
		</>
	);
}
