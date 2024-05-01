const Employee = require("../models/employeesModel");

const getAll = async() => {
    try{
        return await Employee.findAll();
    } catch (error) {
        throw error;
    }
}

const getById = async(id) => {
    try{
        const employee = await Employee.findByPk(id);
        if(!employee){
            throw new Error('Employee not found');
        }
        return employee;
    }catch(err){
        console.log(err);
        throw err;
    }
}

const create = async ({ name, surname, address, email, phone, notes }) =>{
    try{
        const newEmployee = new Employee({ name, surname, address, email, phone, notes });
        return await newEmployee.save();
    }catch(err){
        throw err;
    }
}


const updatePut = async (employeeId, { name, surname, address, email, phone, notes }) =>{
    try{
        const employee = await Employee.findByPk(employeeId);
        if(!employee){
            throw new Error('Employee not found');
        }
        employee.name = name;
        employee.surname = surname;
        employee.address = address;
        employee.email = email;
        employee.phone = phone;
        employee.notes = notes;

        await employee.save();
        return employee;
    }catch(err){
        throw err;
    }
}

const updatePatch = async (employeeId, updatedFields) => {
    try{
        const employee = await Employee.findByPk(employeeId);
        if(!employee){
            throw new Error('Employee not found');
        }
        Object.keys(updatedFields)
            .forEach((key) =>{
                employee[key] = updatedFields[key];
            });
        await employee.save();
        return employee;
    } catch(err){
        throw err;
    }

}

const deleteById = async(employeeId) =>{
    try{
        const employee = await Employee.findByPk(employeeId);
        if(!employee){
            throw new Error('Employee not found');
        }
        return await Employee.destroy({where: {id: employeeId}});

    }catch(err){
        throw err;
    }
}
module.exports = { getById, getAll, create, updatePut, updatePatch, deleteById };