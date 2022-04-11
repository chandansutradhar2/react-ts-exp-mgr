import { Expense } from "../../models/Expense";

export const ExpenseList = (props: { expenses: Expense[] }) => {
	console.log("expenseList rendered");
	return (
		<div>
			<h4>Expense List</h4>
			<table>
				<thead>
					<tr>
						<th>Sr No</th>
						<td>Expense Date</td>
						<td>Expense Name</td>
						<td>Amount</td>
						<td>Category</td>
					</tr>
				</thead>
				<tbody>
					{props.expenses.map((expense: Expense, idx: number) => {
						return (
							<tr>
								<td>{idx + 1}</td>
								<td>{expense.expDate}</td>
								<td>{expense.title}</td>
								<td>{expense.amount}</td>
								<td>{expense.category}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
