const Employee = require('./employeesModel');
// const getAll = () => {
//     return db.query('SELECT * FROM employees');
// }

const getAll = async() => {
    try{
        return await Employee.findAll();
    } catch (error) {
        throw error;
    }
}
const getById = (employeeId) => {
    return db.query('SELECT * FROM employees WHERE id = ?', [employeeId]);
}

const create = ({ name, surname, address, email, phone, notes }) =>{
    return db.query(
        'INSERT INTO employees (name, surname, address, email, phone, notes) VALUES (?, ?, ?, ?, ?, ?)', 
        [name, surname, address, email, phone, notes]);
}

const updatePut = (employeeId, { name, surname, address, email, phone, notes }) =>{
    return db.query(
        'UPDATE employees SET name = ?, surname = ?, address = ?, email = ?, phone = ?, notes = ? WHERE id = ?', 
        [name, surname, address, email, phone, notes, employeeId]);
};

const updatePatch = (employeeId, updatedFields) => {
    return db.query(
        'UPDATE employees SET ? WHERE id = ?', 
        [updatedFields, employeeId]);
};

const deleteById = (employeeId) => {
    return db.query('DELETE FROM employees WHERE id = ?', [employeeId]);
};
module.exports = { getById, getAll, create, updatePut, updatePatch, deleteById };