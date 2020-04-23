var promiseAll = function (arr) {
	var len = arr.length
	var countNum = 0
	var resArr = []
	return new Promise((resolve, rej) => {
		for (let i = 0; i < arr.length; i++) {
			try {
				arr[i].then(res => {
					resArr[i] = res
					countNum++
					if (countNum === len) {
						return resolve(resArr)
					}
				})
			} catch (error) {
				console.log(arr[i])
				rej(arr[i] + error)
			}
		}
	})
}
var p1 = new Promise((res, rej) => {
	setTimeout(() => {
		res(11)
	}, 2000)
});
p2 = new Promise((res, rej) => {
	setTimeout(() => {
		rej(222222)
	}, 500)
	setTimeout(() => {
		res(22)
	}, 1000)
});
p3 = new Promise((res, rej) => {
	setTimeout(() => {
		res(33)
	}, 3000)
});

promiseAll([p1, p2, p3]).then(function (value) {
	console.log(value)
})