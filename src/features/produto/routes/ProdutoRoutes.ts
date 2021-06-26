import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';
import verificaId from "../middlewares/verificaId";
import verificaBody from "../middlewares/verificaBody";

export default class ProdutoRoutes {

    public init(): Router {
        const routes = Router();
        const controller = new ProdutoController();

        routes.get('/produto', controller.index);
        routes.get('/produto/:id', [verificaId], controller.show);
        routes.post('/produto', [verificaBody], controller.store);
        routes.put('/produto/:id', [verificaId, verificaBody], controller.update);
        routes.delete('/produto/:id', [verificaId], controller.delete);

        return routes;
    }
}