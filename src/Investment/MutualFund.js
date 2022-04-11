import { StateContext } from "../App";
import { useContext } from "react";

export function MutualFund() {
	const stateContext = useContext(StateContext);

	return (
		<div className="container">
			<h2>Mutual Funds View here</h2>
		</div>
	);
}
