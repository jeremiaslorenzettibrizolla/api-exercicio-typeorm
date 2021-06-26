import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class CategoriaController {

    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const categorias = await connection.query("SELECT * FROM varejo.categoria");

        return response.json(categorias);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const categoria = await connection.query("SELECT * FROM varejo.categoria WHERE uid = $1", [uid])

        return response.json(categoria).status(200);
    }

    public async store(request: Request, response: Response) {
        const { nome, descricao, tag } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query("INSERT INTO varejo.categoria (nome, descricao, tag) VALUES ($1, $2, $3)",
                [nome, descricao, tag]);

        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { nome, descricao, tag } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query(`UPDATE varejo.categoria WHERE uid = ${uid} (nome, descricao, tag) VALUES ($1, $2, $3)`,
                [nome, descricao, tag]);

        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query("DELETE FROM varejo.categoria WHERE uid = $1", [uid]);

        return response.sendStatus(204);
    }  
}