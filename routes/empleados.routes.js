const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleado.controller');
router.get('/',EmpleadoController.getEmpleados);
router.post('/',EmpleadoController.createEmpleado);
router.get('/:id',EmpleadoController.getEmpleado);
router.put('/:id',EmpleadoController.editEmpleado);
router.delete('/:id',EmpleadoController.deleteEmpleado);


module.exports = router;