import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Observable } from "rxjs/internal/Observable";
import { config } from "../apiconfig";
export function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, showAlert] = useState(false);
	const [success, showSuccess] = useState(false);
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
					console.log(res.data.user);
					showSuccess(true);
					localStorage.setItem("user", JSON.stringify(res.data.user));
					localStorage.setItem("token", JSON.stringify(res.data.token));
					setTimeout(() => {
						navigate("/", {
							state: res.data.user,
						});
					}, 2000);
				} else {
					showAlert(true);
				}
			})
			.catch((err) => {
				showAlert(true);
			});
	};

	function fun1() {
		return new Promise((resolve, reject) => {
			setInterval(() => {
				resolve(10);
			}, 2000);
		});
	}

	return (
		<div className="container">
			{success ? (
				<div className="alert alert-success" role="alert">
					Login Success.redirecting to home......
				</div>
			) : null}
			{alert ? (
				<div className="alert alert-danger" role="alert">
					Failed to Connect to the Server.
				</div>
			) : null}
			{
				<div
					style={{ display: "flex", flexDirection: "column", width: "450px" }}
				>
					<div className="input-group mb-3">
						<label className="form-label">Email address</label>
						<span className="input-group-text" id="basic-addon1">
							@
						</span>

						<input
							type="email"
							onChange={(ev) => setEmail(ev.target.value)}
							value={email}
							className="form-control"
							placeholder="name@example.com"
						/>
					</div>

					<div className="input-group mb-3">
						<label className="form-label">Password</label>
						<span className="input-group-text" id="basic-addon1">
							P
						</span>
						<input
							type="password"
							onChange={(ev) => setPassword(ev.target.value)}
							value={password}
							className="form-control"
						/>
					</div>

					<button type="button" className="btn btn-primary" onClick={onLogin}>
						Login
					</button>
				</div>
			}
		</div>
	);
}
