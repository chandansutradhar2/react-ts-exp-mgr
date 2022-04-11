import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import { Login } from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { ExpensView } from "./Expenses/EspenseView";
import { MenuBar } from "./MenuBar/MenuBar";
import { InvestmentView } from "./Investment/InvestmentView";
import { MutualFund } from "./Investment/MutualFund";
import { DebtFund } from "./Investment/DebtFund";
import { Stocks } from "./Investment/Stocks";

export const StateContext = createContext({
	expenses: [
		{
			amount: 300,
			category: "Travel Expenses",
			createdBy: "chandan",
			createdOn: 1649672825391,
			expDate: 2000,
			title: "edede",
		},
	],
	user: null,
});

// const userContext = createContext(null);
// const ExpenseContext = createContext(null);

function App() {
	const [appState, setAppState] = useState({
		expenses: [
			{
				amount: 300,
				category: "Travel Expenses",
				createdBy: "chandan",
				createdOn: 1649672825391,
				expDate: 2000,
				title: "edede",
			},
		],
		user: null,
	});

	return (
		<StateContext.Provider value={appState}>
			<div className="App">
				<BrowserRouter>
					<MenuBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/expense" element={<ExpensView />} />
						<Route path="/investment" element={<InvestmentView />}>
							<Route path="/investment/mf" element={<MutualFund />} />
							<Route path="/investment/share" element={<Stocks />} />
							<Route path="/investment/debt" element={<DebtFund />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</StateContext.Provider>
	);
}

export default App;
