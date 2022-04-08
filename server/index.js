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

let expenses = [];

app.post("/api/expense/add", (req, res) => {
	//todo save the expenses
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

app.listen(4000, () => {
	console.log("server started and listening on port 4000");
});
