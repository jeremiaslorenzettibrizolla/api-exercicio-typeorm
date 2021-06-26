import { NextFunction, Request, Response } from 'express';

export default function VerificaBody(request: Request, response: Response, next: NextFunction) {
    const { nome, descricao, tag } = request.body;

    if (!nome || !descricao || !tag) {
        return response.status(400).json({
            success: false,
            message: 'Algum dos campos não foi preenchido',
        });
    }
    next();
};