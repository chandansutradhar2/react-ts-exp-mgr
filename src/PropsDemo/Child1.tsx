export function Child1(props: any) {
	console.log("Child1 rendered");
	return (
		<>
			<h3>Child 1 Component</h3>
			<p>
				Expense {props.expense} , token :{props.token} , UserName:
				{props.userName}
			</p>
		</>
	);
}
