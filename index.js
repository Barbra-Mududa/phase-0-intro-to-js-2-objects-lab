// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updateEmployee = {...employee}
    updateEmployee[key] = value;
    return updateEmployee;
}
updateEmployeeWithKeyAndValue();

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue();

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key]
    return newEmployee
}
deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key]
    return employee
}
destructivelyDeleteFromEmployeeByKey();

