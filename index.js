const express =  require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');
const cors = require('cors');
/**Configuracion */
app.set('port',process.env.PORT || 3000);

/**Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
/**Routes */
app.use('/api/empleados',require('./routes/empleados.routes'));
// app.use(require('./routes/empleados.routes'));

/**Starint the server */
app.listen(3000,()=>{
    console.log("Servidor en puerto",app.get('port'));
});