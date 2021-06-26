import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import CategoriaRoutes from './features/categoria/routes/CategoriaRoutes';
import ProdutoRoutes from './features/produto/routes/ProdutoRoutes';
import EstoqueRoutes from './features/estoque/routes/EstoqueRoutes';
import Database from './core/data/connections/Database';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({
    path: '../.env'
});

app.use(new CategoriaRoutes().init());
app.use(new ProdutoRoutes().init());
app.use(new EstoqueRoutes().init());

new Database().openConnection().then(() => {
    app.listen(port, () => {
        console.log('api rodando')
    });
});