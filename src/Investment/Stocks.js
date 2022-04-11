import { useContext } from "react";
import { UserContext } from "../App";

export function Stocks() {
	let userObj = useContext(UserContext);
	console.log(userObj);

	return (
		<div className="container">
			<h2>Stock and Shares View here</h2>
			<p>{userObj.email}</p>
		</div>
	);
}
