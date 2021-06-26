import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class EstoqueController {

    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const estoque = await connection.query('SELECT * FROM varejo.estoque');

        return response.json(estoque);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const estoque = await connection.query('SELECT * FROM varejo.estoque WHERE uid = $1', [uid]);

        return response.json(estoque).status(200);
    }

    public async store(request: Request, response: Response) {
        const { produto_uid, quantidade } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query('INSERT INTO varejo.estoque (produto_uid, quantidade) VALUES ($1, $2)',
                [produto_uid, quantidade]);

        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { produto_uid, quantidade } = request.body;
        const connection = new Database().getConnection();
        const result = await connection
            .query(`UPDATE varejo.estoque WHERE uid = ${uid} (produto_uid, quantidade) VALUES ($1, $2)`,
                [produto_uid, quantidade]);

        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query('DELETE FROM varejo.estoque WHERE uid = $1', [uid]);

        return response.status(204);
    }
}