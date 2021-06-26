import { Router } from 'express';
import EstoqueController from '../controllers/EstoqueController';
import verificaId from "../middlewares/verificaId";
import verificaBody from "../middlewares/verificaBody";

export default class EstoqueRoutes {

    public init(): Router {
        const routes = Router();
        const controller = new EstoqueController();

        routes.get('/estoque', controller.index);
        routes.get('/estoque/:uid', [verificaId], controller.show);
        routes.post('/estoque', [verificaBody], controller.store);
        routes.put('/estoque/:uid', [verificaId, verificaBody], controller.update);
        routes.delete('/estoque/:uid', [verificaId], controller.delete);

        return routes;
    }
}