import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Local from '../models/Local';

class LocalController{

    async list(req: Request, res: Response){
        const repository = getRepository(Local);
        const lista = await repository.find();
        return res.json(lista);
    }

}

export default new LocalController();