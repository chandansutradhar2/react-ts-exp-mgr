let cnt = 10;
function fun1() {

    return new Observable((obs) => {
        
    });
	return new Promise((resolve, reject) => {
		setInterval(() => {
			cnt = cnt + 1;
			resolve(cnt);
		}, 2000);
	});
}

async function caller() {
	fun1().then((res) => {
		console.log("recieved from fun 1", res);
	});
}

caller();
