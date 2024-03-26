import { add, findAll, findById } from "./usuario/usuario.service";
import express, { Request, Response} from 'express';

export const router = express.Router();

router.route('/usuario').get(async (req:Request, res:Response) => {
    res.send(await findAll());
})

router.route('/usuario/:id').get(async (req:Request, res:Response) => {
    res.send(await findById(+req.params.id));
})


router.route('/usuario').post(async (req:Request, res:Response) => {
    res.send(await add(req.body));
})