export function Login() {
	const onLogin = () => {};
	return (
		<div>
			{
				<div
					style={{ display: "flex", flexDirection: "column", width: "450px" }}
				>
					<input type="text" placeholder="Enter EmailId" />

					<input type="number" placeholder="Enter Password" />

					<button onClick={onLogin}>Login</button>
				</div>
			}
		</div>
	);
}
