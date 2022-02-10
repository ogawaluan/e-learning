import { Router } from 'express';
import { lessonsController } from '../controllers';

const lessonsRouter = Router();

lessonsRouter.get('/', lessonsController.index);
lessonsRouter.get('/:id', lessonsController.show);
lessonsRouter.post('/', lessonsController.create);
lessonsRouter.put('/:id', lessonsController.update);
lessonsRouter.delete('/:id/', lessonsController.delete);

export default lessonsRouter;
