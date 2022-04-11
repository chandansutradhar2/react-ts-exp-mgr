import { useLocation } from "react-router-dom";
export function Home() {
	const { state } = useLocation();

	console.log(state);

	return (
		<div className="container">
			<h2>Home View</h2>
		</div>
	);
}
