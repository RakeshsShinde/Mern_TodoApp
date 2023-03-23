const router = require('express').Router();

const { createTask, updateTask, getTask, getTasks } = require('../controllers/taskControllers');
const { Verify } = require('../middleware/VerifyToken')
router.post('/create', Verify, createTask);
router.put('/:id', Verify, updateTask);
router.get('/:id', Verify, getTask);
router.get('/', Verify, getTasks);

module.exports = router;