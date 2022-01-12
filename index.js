const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({partialsDir: 'views/partials'});
const port = 8082;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/produto/:id', (req, res) => {
    const produtos = [
        {
            id: 0,
            nome: 'Café',
            valor: '8,80'
        },
        {
            id: 1,
            nome: 'Pão de forma',
            valor: '6,90'
        },
        {
            id: 2,
            nome: 'Lasanha congelada',
            valor: '14,90'
        }
    ];
    const id = req.params.id;

    res.render('vproduto', {produto: produtos[id]});
});

app.get('/', (req, res) => {
    const produtos = [
        {
            id: 0,
            nome: 'Café',
            valor: '8,80'
        },
        {
            id: 1,
            nome: 'Pão de forma',
            valor: '6,90'
        },
        {
            id: 2,
            nome: 'Lasanha congelada',
            valor: '14,90'
        }
    ];

    res.render('home', {produtos});
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}.`);
});