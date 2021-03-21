const { response } = require('express');
const Empleado = require('../models/empleado');

const EmpleadoController = {};

EmpleadoController.getEmpleados = async (req,res)=>{
    const empleados = await Empleado.find();
    res.json(empleados);
}


EmpleadoController.createEmpleado = async (req,res)=>{
  
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({
    'estado':'Empleado guardado'
  });
  // console.log(req.body);
  // res.json('recibido');
}


EmpleadoController.getEmpleado = async (req,res)=>{
  const empleado = await Empleado.findById(req.params.id);
  res.json(empleado);
}

EmpleadoController.editEmpleado = async(req,res)=>{
  const {id} = req.params;
  const empleado = {
    "nombre":req.body.nombre,
    "cargo": req.body.cargo,
    "oficina":req.body.oficina,
    "salario": req.body.salario
  }
  await Empleado.findByIdAndUpdate(id,{$set: empleado},{new: true});
  res.json({
    "estado":"Empleado actualizado"
  });
}

EmpleadoController.deleteEmpleado =async(req,res)=>{
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({
    "estado":"Empleado eliminado"
  });
}

module.exports = EmpleadoController;