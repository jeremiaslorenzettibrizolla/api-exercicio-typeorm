import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class ProdutoController {
    
    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const produtos = await connection.query("SELECT * FROM varejo.produto");

        return response.json(produtos).status(200);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const produto = await connection.query("SELECT * FROM varejo.produto WHERE uid = $1", [uid])

        return response.json(produto).status(200);
    }
 
    public async store(request: Request, response: Response) {
        const { nome, descrição, categoria_uid } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query("INSERT INTO varejo.produto (nome, descrição, categoria_uid) VALUES ($1, $2, $3)",
                [nome, descrição, categoria_uid]);

        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { nome, descricao, categoria_uid } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query(`UPDATE varejo.produto WHERE uid = ${uid} (nome, descricao, categoria_uid) VALUES ($1, $2, $3)`,
                [nome, descricao, categoria_uid]);

        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query("DELETE FROM varejo.produto WHERE uid = $1", [uid]);

        return response.sendStatus(204);
    }
    
}