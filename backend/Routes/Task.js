const router = require('express').Router();
const { createTask, updateTask, getTask, getTasks } = require('../controllers/taskControllers')
router.post('/create', createTask);
router.put('/:id', updateTask);
router.get('/:id', getTask);
router.get('/', getTasks);

module.exports = router;