const initArr = [8, 9, 3, 2, 7, 55, 55, 1, 4, 6]

function bubbleSort (arr) {
	const length = arr.length
	let result = [...arr]
	for (let i = length; i > 0; i--) {
		for (let z = 0; z < i-1; z++) {
			if (result[z] >= result[z+1]) {
				const tmp = result[z];
				result[z] = result[z+1];
				result[z+1] = tmp;
			}
		}
	}

	return result
}

const resultArr = bubbleSort(initArr)

console.log(`Initial array = ${initArr}`)
console.log(`Result bubbleSort array = ${resultArr}`)