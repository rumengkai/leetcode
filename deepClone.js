// deepClone
function deepClone (obj, hash = new WeakMap()) {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	// 处理不能循环的对象
	if (obj instanceof Date) return new Date(obj)
	if (obj instanceof RegExp) return new RegExp(obj)

	let cloneObj = Array.isArray(obj) ? [] : {}
	hash.set(obj, cloneObj)
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = deepClone(obj[key], hash)
		}
	}
	return cloneObj
}