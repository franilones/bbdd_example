const {getAll, create, updatePut, updatePatch, deleteById, getById} = require('@services/employeesService');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await getAll();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const employee = await getById(req.params.employeeId);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const createEmployee = async (req, res) => {
    try{
        const result = await create(req.body);
        res.status(202).status(201).json(result);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

const updateEmployeePut = async (req, res) => {
    try{
        const result = await updatePut(req.params.employeeId, req.body);
        res.status(202).json(result);
    }catch(err){
        res.status(500).json(err);
    }
};

const removeEmployee = async (req, res) => {
    try{
        const result = await deleteById(req.params.employeeId);
        if(result > 0){
            res.status(204).json({ message: 'Employee deleted successfully' });
        }else{
            res.status(422).json({ message: 'No rows affected' });
        }
    }catch(err){
        res.status(500).json(err);
    }
};

const updateEmployeePatch = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await updatePatch(id, updates);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
};
module.exports = {getAllEmployees, getEmployeeById, createEmployee, updateEmployeePut, removeEmployee, updateEmployeePatch};