import axios from "axios";
import { useState } from "react";
import { config } from "../apiconfig";
export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = () => {
		console.log(email, password);
		//todo: data validation & sanitzation
		axios
			.post(config.apiUrl + "/auth/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status == 200) {
					alert("login successful");
				} else {
					alert("invalid credentials");
				}
			})
			.catch((err) => alert(err));
	};
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
