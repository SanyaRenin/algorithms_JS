const initArr = [8, 9, 3, 2, 7, 55, 55, 1, 4, 6]

function mergeSort (arr) {
	const length = arr.length
	if (length <= 1)
		return arr

	const mid = Math.floor(length / 2)
	const a = mergeSort(arr.slice(0, mid))
	const b =  mergeSort(arr.slice(mid))

	let result = []

	let indexA = 0,
		indexB = 0

	while(indexA < a.length && indexB < b.length) {
		let elementA = a[indexA]
		let elementB = b[indexB]

		if (elementA <= elementB) {
			result.push(elementA)
			indexA++
		} else {
			result.push(elementB)
			indexB++
		}
	}

	result = [
		...result,
		...a.slice(indexA),
		...b.slice(indexB)
	]

	return result
}

const resultArr = mergeSort(initArr)

console.log(`Initial array = ${initArr}`)
console.log(`Result mergeSort array = ${resultArr}`)