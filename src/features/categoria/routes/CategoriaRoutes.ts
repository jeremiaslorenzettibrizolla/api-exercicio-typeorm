import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController';
import verificaId from "../middlewares/verificaId";
import verificaBody from "../middlewares/verificaBody";

export default class CategoriaRoutes {

    public init(): Router {
        const routes = Router();
        const controller = new CategoriaController();

        routes.get('/categoria', controller.index);
        routes.get('/categoria/:uid', [verificaId], controller.show);
        routes.post('/categoria', [verificaBody], controller.store);
        routes.put('/categoria/:uid', [verificaId, verificaBody], controller.update);
        routes.delete('/categoria/:uid', [verificaId], controller.delete);

        return routes;
    }
}