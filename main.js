const fs = require('fs'); const readline = require('readline'); const rl = readline.createInterface({  input: process.stdin,  output: process.stdout 
}); const employees = []; // ... Rest of the code ... 
function calculateSalary(wage, hours) {  return wage * hours; 
} 
function displayEmployeeList() {  console.log('Employee List:');  employees.forEach((employee, index) => {  console.log(`${index + 1}. ${employee.name} - Salary:  
$${employee.salary.toFixed(2)}`); 
 }); } 
function addEmployee() {  rl.question('Enter employee name: ', (name) => {  rl.question('Enter hourly wage: ', (hourlyWage) => {  rl.question('Enter hours worked: ', (hoursWorked) => {  const wage = parseFloat(hourlyWage);  const hours = parseFloat(hoursWorked);  const salary = calculateSalary(wage, hours);  employees.push({ name, salary });  console.log(`Employee ${name} added.`);  displayEmployeeList(); 
 rl.question('Do you want to add another employee? (yes/no): ', (answer)  
=> { 
 if (answer.toLowerCase() === 'yes') { 
 addEmployee();  } else { 
 console.log('Saving data...');  saveToFile(); 
 console.log('Salary management system closed.');  rl.close(); 
 } 
 }); 
function saveToFile() {  const dataToSave = JSON.stringify(employees, null, 2);  fs.writeFile('employeeData.json', dataToSave, 'utf8', (err) => {  if (err) {  console.error('Error saving data to file:', err); 
 console.log('Data saved to employeeData.json'); 
 } 
 }); 
} 
// Start the process by calling addEmployee addEmployee(); 
