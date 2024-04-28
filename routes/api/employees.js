const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello, World!');
});
// const getAll = () => {
//     return db.query('SELECT * FROM employees');
// }

// const create = ({ name, surname, address, email, phone, notes }) =>{
//     return db.query(
//         'INSERT INTO employees (name, surname, address, email, phone, notes) VALUES (?, ?, ?, ?, ?, ?)', 
//         [name, surname, address, email, phone, notes]);
// }
module.exports = router;