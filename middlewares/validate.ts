import { response } from 'express';
import { validationResult } from 'express-validator';


export const validateFields = ( req:any, res = response, next:any ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}