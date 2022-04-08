function fun1() {
	console.log("function 1 invoked");
}

function isUserLoggedIn() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(false);
		}, 5000);
	});
}

function fun3(isLoggedIn) {
	console.log("value of isLoggedIn", isLoggedIn);
	isLoggedIn == true
		? console.log("user logged IN")
		: console.log("user not loogedIn");
}
function fun4() {
	console.log("function 4 invoked");
}

fun1();

isUserLoggedIn().then((result) => {
	fun3(result);
});

fun4();

/*
intro to promises
----------------------------------------------------------------
PROMISE - something that will happen in future (source- reciepent -> listen to promise)
RESOLVE
REJECT
*/
