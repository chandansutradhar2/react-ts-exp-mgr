import { useState } from "react";

export function Child1(props: any) {
	const [email, setEmail] = useState("");

	console.log("Child1 rendered");
	//props.expense++;

	return (
		<>
			<h3>Child 1 Component</h3>
			<p>
				Expense {props.expense} , token :{props.token} , UserName:
				{props.userName}
				<input
					type="text"
					placeholder="enter email"
					value={email}
					onChange={(ev) => {
						setEmail(ev.target.value);
						props.onEmailChange(ev.target.value);
					}}
				/>
			</p>
		</>
	);
}
