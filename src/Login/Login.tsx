import { useState } from "react";

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = () => {};
	return (
		<div>
			{
				<div
					style={{ display: "flex", flexDirection: "column", width: "450px" }}
				>
					<input
						type="text"
						value={email}
						placeholder="Enter EmailId"
						onChange={(ev) => setEmail(ev.target.value)}
					/>

					<input
						type="password"
						value={password}
						placeholder="Enter Password"
						onChange={(ev) => setPassword(ev.target.value)}
					/>

					<button onClick={onLogin}>Login</button>
				</div>
			}
		</div>
	);
}
