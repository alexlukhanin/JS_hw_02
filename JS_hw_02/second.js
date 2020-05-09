/**
 * 
 */

let employeeSalaries = {
		worker1: 2500,
		worker2: 2800,
		worker3: 2900,
		worker4: 3000,
		worker5: 3500,
		worker6: 2400,
		worker7: 2500,
		worker8: 2700,
		director: 7000,
		accounter: 6000

};

let salaryAmount = 0;

for ( var salary in employeeSalaries) {
	salaryAmount += employeeSalaries[salary];
	console.log("The salary of " + salary + " is $" + employeeSalaries[salary]);
}
console.log('-----------------------------------------');
console.log('Total salary amount is $' + salaryAmount);