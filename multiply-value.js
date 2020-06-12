function multiplyValue(value, times) {
	if (typeof value === 'string' && typeof times === 'number') {
		return value.repeat(times)
	} else if (typeof value === 'number' && typeof times === 'number') {
		return value * times
	} else (typeof value !== 'string' || typeof value !== 'number' && typeof times !== 'number') 
		return null
}

console.log(multiplyValue(true, 2)) //prints null
console.log(multiplyValue(4, true)) //prints null
console.log(multiplyValue(4, 4)) //prints 16
console.log(multiplyValue("times ", 4))//prints "times times times times"