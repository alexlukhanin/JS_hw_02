/**
 * 
 */
/* a1 and a2 are operators, operation (sum/subtract/multiply/devide) */
function countNumbers(a1, a2, operation) {

	try {
		if (isNaN(a1) || isNaN(a2)) {
		    throw 'Parameter is not a number!';
		  }
	} catch (e) {
		console.log(e);
	}
	

	if (operation == 'sum') {
		return a1 + a2;
	} else if (operation == 'substract') {
		return a1 - a2;
	} else if (operation == 'multiply') {
		return a1 * a2;
	} else if (operation == 'devide') {

		try {
			return a1 / a2;
		} catch (e) {
			console.log(e);
			return 'e01'; // error code
		}

	} else {
		console.log('Wrong operation parameter!');
	}

}

console.log("Sum:");
let result1 = countNumbers(15, 23.5, 'sum');
console.log(result1); 
console.log('------------------------------');
console.log("error in operation parameter:");
let result2 = countNumbers(12, -2.7, 'substruct');
console.log(result2); 
console.log('------------------------------');
console.log("Substract:");
let result3 = countNumbers(25.14, -13.78, 'substract');
console.log(result3); 
console.log('------------------------------');
console.log("Multiply:");
let result4 = countNumbers(25.14, -13.78, 'multiply');
console.log(result4); 
console.log('------------------------------');
console.log("Error in parameter(not a number):");
let result5 = countNumbers(12, '50.OO', 'multiply'); // double Uppercase lettes 'o' 
console.log(result5); 
console.log('------------------------------');
console.log("Devide:"); 
let result6 = countNumbers(144, 12, 'devide');
console.log(result6); 
console.log("Devide by zero error "); 
let result7 = countNumbers(144, 0, 'devide');
console.log(result7); 







