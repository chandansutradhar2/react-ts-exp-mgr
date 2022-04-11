const express = require("express");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

app.get("/api", (req, res, next) => {
	res.send("api working fine");
});

let expenses = [
	{
		amount: 3000,
		category: "Travel Expenses",
		createdBy: "chandan",
		createdOn: 1649672825391,
		expDate: 2000,
		title: "Petrol",
	},
	{
		amount: 450,
		category: "Travel Expenses",
		createdBy: "chandan",
		createdOn: 1649672825391,
		expDate: 2000,
		title: "PUC",
	},
	{
		amount: 350,
		category: "Food Expenses",
		createdBy: "chandan",
		createdOn: 1649672825391,
		expDate: 2000,
		title: "Pizza",
	},
];

app.post("/api/expense/add", (req, res) => {
	//todo save the expenses
	console.log(req.body);
	if (
		req.body.amount &&
		req.body.title &&
		req.body.expDate &&
		req.body.category &&
		req.body.createdBy
	) {
		expenses.push({
			amount: req.body.amount,
			title: req.body.title,
			expDate: req.body.expDate,
			category: req.body.category,
			createdOn: Date.now(),
			createdBy: req.body.createdBy,
		});

		res.status(200).send({ result: true, expenses: expenses });
	} else {
		res.status(402).send("invalid expense format");
	}
});

app.get("/api/expense/list", (req, res) => {
	res.status(200).send({ expenses: expenses });
});

app.post("/api/auth/login", (req, res) => {
	if (req.body.email && req.body.password) {
		res.send({
			result: true,
			token: "u83hu38j3w2",
			user: {
				fullName: "Chandan Naresh",
				dob: "06/03/1983",
				email: "chandansutradhar2@gmail.com",
				mobileNo: "8080811145",
				country: "india",
			},
		});
	} else {
		res.status(401).send("unauthorized");
	}
});

app.listen(4000, () => {
	console.log("server started and listening on port 4000");
});
