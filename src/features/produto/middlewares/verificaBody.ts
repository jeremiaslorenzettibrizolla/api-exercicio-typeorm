import { NextFunction, Request, Response } from 'express';

export default function VerificaBody(request: Request, response: Response, next: NextFunction) {
    const { nome, descrição, categoria_uid } = request.body;

    if (!nome || !descrição || !categoria_uid) {
        return response.status(400).json({
            success: false,
            message: 'Algum dos campos não foi preenchido',
        });
    }
    next();
};