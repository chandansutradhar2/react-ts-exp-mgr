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
import { User } from "./models/User";

const defaultValue = {
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
};

//step 1: create intial state values
const userObj: User = {
	dob: 0,
	email: "",
	fullName: "",
	country: "",
	mobileNo: "",
};
//step 2: initialize context using createContext hook
export const UserContext = createContext(userObj);

export const StateContext = createContext(defaultValue);

// const userContext = createContext(null);
// const ExpenseContext = createContext(null);

function App() {
	const [appState, setAppState] = useState(defaultValue);
	const [user, setUser] = useState(userObj);

	//todo: logic to identfy and find user;

	//initial state update
	let tmp = localStorage.getItem("user");
	if (tmp) {
		setUser(JSON.parse(tmp));
	}

	return (
		//setting up UserCOntext across app by passing state user value
		<UserContext.Provider value={user}>
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
		</UserContext.Provider>
	);
}

export default App;
