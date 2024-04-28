const router = require('express').Router();
const { getAll, create, updatePut, updatePatch, deleteById, getById } = require('../../models/employeesModel');
router.get('/', (req, res) => {
    getAll()
        .then(employees => res.json(employees[0]))
        .catch(err => res.json(err));
});

router.get('/:employeeId', async (req, res) => {
    try{
        const [employee] = await getById(req.params.employeeId);
        if(employee){
            res.json(employee);
        }else{
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const [result] = await create(req.body);
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
});

router.put('/:employeeId', async (req, res) => {
    try{
        const [result] = await updatePut(req.params.employeeId, req.body);
        res.json(result);
    }catch(err){
        res.status(500).json(err);
    }
});

router.delete('/:employeeId', async (req, res) => {
    try{
        const [result] = await deleteById(req.params.employeeId);
        res.json(result);
    }catch(err){
        res.status(500).json(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await updatePatch(id, updates);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
});


module.exports = router;