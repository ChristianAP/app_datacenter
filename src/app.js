import express from 'express'
import morgan from 'morgan'
import personaRoutes from './routes/persona.routes'



const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR LEVANTADO CORRECTAMENTE...!');
});

app.use('/persona', personaRoutes);


export default app;