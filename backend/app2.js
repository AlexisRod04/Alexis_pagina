const express = require('express');
const cors  = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>{
    console.log('Server Listening on PORT: ', PORT);
});

app.get('/cliente1',( request, response) => {
    const status = [
        {
            raza: 'Calico',
            nombre: 'Spicy',
            sexo: 'Macho',
            edad: '1 año',
            esterilizado: 'Si',
            estado: 'En adopción'
        },
        {raza: 'siames',nombre: 'Lula', sexo: 'Hembra', Edad: '9 meses', esterilizado:'Si', estado: 'Adoptada'},
        {raza: 'persa', nombre: 'Pelusa', sexo: 'Hembra', Edad: '5 meses', esterilizado:'No', estado: 'En adopción'}
    ];
    response.send(status);
});

app.get('/cliente2',( request, response) => {
    const status = [
        {
            reaza: 'Domestico de pelo corto',
            nombre: 'Taco',
            sexo: 'Macho',
            edad: '2 años',
            esterilizado: 'Si',
            estado: 'Adoptado'
        },
        {raza: 'siames',nombre: 'Jinx', sexo: 'Macho', Edad: '6.5 meses', esterilizado:'Si', estado: 'En adopcion'},
        {raza: 'azul ruso', nombre: 'Billy', sexo: 'Macho', Edad: ' 2 meses', esterilizado:'No', estado: 'En adopción'}
    ];
    response.send(status);
});




