import { NextFunction, Request, Response } from 'express';

export default function VerificaBody(request: Request, response: Response, next: NextFunction) {
    const { produto_uid, quantidade } = request.body;

    if (!produto_uid || !quantidade) {
        return response.status(400).json({
            success: false,
            message: 'Algum dos campos não foi preenchido',
        });
    }
    next();
};