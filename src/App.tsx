import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { ExpenseList } from "./ExpenseList/ExpenseList";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { Child1 } from "./PropsDemo/Child1";
import { Child2 } from "./PropsDemo/Child2";
import { StateClassComponent } from "./StateDemo/StateClassCom";
import store from "./store/store";
import { Child3 } from "./PropsDemo/Child3";
import { Expense } from "./models/Expense";
import { Login } from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { ExpensView } from "./Expenses/EspenseView";
import { MenuBar } from "./MenuBar/MenuBar";
import { InvestmentView } from "./Investment/InvestmentView";
import { MutualFund } from "./Investment/MutualFund";
import { DebtFund } from "./Investment/DebtFund";
import { Stocks } from "./Investment/Stocks";

const expArr: Expense[] = [];

function App() {
	const [expenses, setExpenses] = useState(expArr);

	const addExpHandler = (expense: Expense) => {
		let tmp: Expense[] = expenses.slice();
		tmp.push(expense);
		setExpenses(tmp);
	};

	const onIncomeAdded = () => {};

	return (
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
	);
}

export default App;
