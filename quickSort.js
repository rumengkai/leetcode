// 快排算法
var arr = []

for (let i = 0; i < 20; i++) {
	arr.push(Math.ceil(Math.random() * 1000))
}
// 原始方法
// function quickSort (arr) {
// 	if (arr.length <= 1) {
// 		return arr
// 	}
// 	let left = []
// 	let right = []
// 	let mid = []
// 	let pivot = arr[0]
// 	for (const e of arr) {
// 		if (e < pivot) {
// 			left.push(e)
// 		} else if (e > pivot) {
// 			right.push(e)
// 		} else {
// 			mid.push(e)
// 		}
// 	}
// 	return quickSort(left).concat([pivot], quickSort(right))
// }
// function quickSort (arr) {
// 	if (arr.length <= 1) {
// 		return arr
// 	}
// 	let left = arr.filter(x => x > arr[0])
// 	let right = arr.filter(x => x < arr[0])
// 	let mid = arr.filter(x => x == arr[0])
// 	return quickSort(left).concat(mid, quickSort(right))
// }
// 一行快排
var quickSort = arr => arr.length <= 1 ? arr : quickSort(arr.filter(x => x < arr[0])).concat(arr.filter(x => x === arr[0]), quickSort(arr.filter(x => x > arr[0])))

console.log(new Date().getTime())
console.log(arr.sort((x, y) => x - y))
console.log(new Date().getTime())

console.log(new Date().getTime())
console.log(quickSort(arr))
console.log(new Date().getTime())


