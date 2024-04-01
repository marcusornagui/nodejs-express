import { create, deleteUsuario, findAll, findById, update, updateAdminUsuario } from "./usuario/usuario.service";
import express, { Request, Response} from 'express';

export const router = express.Router();

router.route('/usuario').get(async (req:Request, res:Response) => {
    res.send(await findAll());
})

router.route('/usuario/:id').get(async (req:Request, res:Response) => {
    res.send(await findById(+req.params.id));
})


router.route('/usuario').post(async (req:Request, res:Response) => {
    res.send(await create(req.body));
})

router.route('/usuario').put(async (req:Request, res:Response) => {
    res.send(await update(req.body));
})

router.route('/usuario/:id').put(async (req:Request, res:Response) => {
    res.send(await updateAdminUsuario(+req.params.id, req.body.admin));
})

router.route('/usuario/:id').delete(async (req:Request, res:Response) => {
    res.send(await deleteUsuario(+req.params.id));
}) 