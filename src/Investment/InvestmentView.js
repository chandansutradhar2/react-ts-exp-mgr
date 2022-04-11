import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SavingPredictor } from "./SavingPredictor";
import { StateContext } from "../App";
import { useContext } from "react";

export function InvestmentView() {
	// const stateContext = useContext(StateContext);
	// console.log(stateContext);
	const { state } = useLocation();

	return (
		<div className="container">
			<div style={{ display: "grid", gridTemplateColumns: "75% 25%" }}>
				<div>
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
				<div style={{ height: "400px", width: "400px" }}>
					<SavingPredictor expenses={""} />
				</div>
			</div>
		</div>
	);
}
