import { Link, Outlet } from "react-router-dom";

export function InvestmentView() {
	return (
		<div className="container">
			<nav className="nav">
				<Link
					className="nav-link active"
					aria-current="page"
					to={"/investment/share"}
				>
					Equities & Stocks
				</Link>
				<Link className="nav-link" to={"/investment/mf"}>
					Mutual Funds
				</Link>
				<Link className="nav-link" to={"/investment/debt"}>
					Debt Funds
				</Link>
			</nav>

			<div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
				<Outlet />
			</div>
		</div>
	);
}
