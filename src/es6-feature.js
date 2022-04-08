function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun1 completed");
			resolve(10);
		}, 800);
	});
}

function fun2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun2 completed");
			resolve(15);
		}, 2500);
	});
}

function fun3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun3 completed");
			resolve(6);
		}, 1300);
	});
}

function fun4() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun4 completed");
			resolve(8);
		}, 4000);
	});
}

function fun5() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun5 completed");
			resolve(19);
		}, 2000);
	});
}

function fun6() {
	setTimeout(() => {
		return 50;
	}, 1000);
}

//old way of managing multiple async operation
// fun1().then((f1res) =>
// 	fun2().then((f2res) =>
// 		fun3().then(() =>
// 			fun4().then(() => fun5().then(() => console.log("all task completed"))),
// 		),
// 	),
// );

//es6 way of managing async operation using async/await

async function caller() {
	let r1 = await fun1();
	let r2 = await fun2();
	let r3 = await fun3();
	let r4 = await fun4();
	let r5 = await fun5();
	let r6 = await fun6();

	console.log(r1 + r2 + r3 + r4 + r5);
}

caller();
