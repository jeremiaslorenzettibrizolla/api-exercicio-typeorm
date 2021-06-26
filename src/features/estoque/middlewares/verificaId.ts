import { NextFunction, Request, Response } from 'express';

export default function VerificaId(request: Request, response: Response, next: NextFunction) {
    const { uid } = request.params;

    if (!uid) {
        return response.status(400).json({
            success: false,
            message: 'Deve ser informado um ID válido',
        });
    }
    next();
}